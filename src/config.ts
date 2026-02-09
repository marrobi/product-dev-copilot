import * as fs from 'fs';
import * as path from 'path';
import { DomainPack, Terminology, ProductDiscoveryConfig } from './types';

/**
 * Configuration manager for Product Discovery Copilot
 */
export class Config {
  private config: ProductDiscoveryConfig;
  private domainPackCache: Map<string, DomainPack> = new Map();
  private terminologyCache: Map<string, Terminology> = new Map();

  constructor(config?: Partial<ProductDiscoveryConfig>) {
    this.config = {
      domainPack: config?.domainPack || 'nhs',
      outputPath: config?.outputPath || './output',
      enableStreaming: config?.enableStreaming ?? true,
      logLevel: config?.logLevel || 'info'
    };
  }

  /**
   * Get current configuration
   */
  getConfig(): ProductDiscoveryConfig {
    return { ...this.config };
  }

  /**
   * Update configuration
   */
  updateConfig(updates: Partial<ProductDiscoveryConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  /**
   * Load domain pack by name
   */
  async loadDomainPack(name: string): Promise<DomainPack> {
    if (this.domainPackCache.has(name)) {
      return this.domainPackCache.get(name)!;
    }

    const domainPackPath = path.join(__dirname, 'domain-packs', name, 'design-system.json');
    
    if (!fs.existsSync(domainPackPath)) {
      throw new Error(`Domain pack not found: ${name}`);
    }

    const domainPackData = fs.readFileSync(domainPackPath, 'utf-8');
    const domainPack: DomainPack = JSON.parse(domainPackData);

    this.domainPackCache.set(name, domainPack);
    return domainPack;
  }

  /**
   * Load terminology for a domain pack
   */
  async loadTerminology(domainName: string): Promise<Terminology> {
    if (this.terminologyCache.has(domainName)) {
      return this.terminologyCache.get(domainName)!;
    }

    const terminologyPath = path.join(__dirname, 'domain-packs', domainName, 'terminology.json');
    
    if (!fs.existsSync(terminologyPath)) {
      throw new Error(`Terminology not found for domain: ${domainName}`);
    }

    const terminologyData = fs.readFileSync(terminologyPath, 'utf-8');
    const terminology: Terminology = JSON.parse(terminologyData);

    this.terminologyCache.set(domainName, terminology);
    return terminology;
  }

  /**
   * Load compliance rules for a domain pack
   */
  async loadComplianceRules(domainName: string): Promise<string> {
    const compliancePath = path.join(__dirname, 'domain-packs', domainName, 'compliance-rules.md');
    
    if (!fs.existsSync(compliancePath)) {
      return '';
    }

    return fs.readFileSync(compliancePath, 'utf-8');
  }

  /**
   * Get list of available domain packs
   */
  async listDomainPacks(): Promise<string[]> {
    const domainPacksDir = path.join(__dirname, 'domain-packs');
    
    if (!fs.existsSync(domainPacksDir)) {
      return [];
    }

    return fs.readdirSync(domainPacksDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  }

  /**
   * Ensure output directory exists
   */
  ensureOutputDir(): void {
    if (!fs.existsSync(this.config.outputPath)) {
      fs.mkdirSync(this.config.outputPath, { recursive: true });
    }
  }

  /**
   * Log message based on log level
   */
  log(level: 'debug' | 'info' | 'warn' | 'error', message: string): void {
    const levels = { debug: 0, info: 1, warn: 2, error: 3 };
    const configLevel = levels[this.config.logLevel];
    const messageLevel = levels[level];

    if (messageLevel >= configLevel) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
    }
  }
}

export default Config;
