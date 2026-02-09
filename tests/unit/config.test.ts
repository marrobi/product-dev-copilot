import Config from '../../config';

describe('Config', () => {
  let config: Config;

  beforeEach(() => {
    config = new Config();
  });

  test('should have default configuration', () => {
    const conf = config.getConfig();
    expect(conf.domainPack).toBe('nhs');
    expect(conf.outputPath).toBe('./output');
    expect(conf.enableStreaming).toBe(true);
    expect(conf.logLevel).toBe('info');
  });

  test('should update configuration', () => {
    config.updateConfig({ domainPack: 'govuk' });
    const conf = config.getConfig();
    expect(conf.domainPack).toBe('govuk');
  });

  test('should load domain pack', async () => {
    const domainPack = await config.loadDomainPack('nhs');
    expect(domainPack.name).toBe('nhs');
    expect(domainPack.displayName).toBe('NHS Healthcare');
  });

  test('should load terminology', async () => {
    const terminology = await config.loadTerminology('nhs');
    expect(terminology.domain).toBe('nhs');
    expect(terminology.terms).toBeDefined();
  });

  test('should list domain packs', async () => {
    const packs = await config.listDomainPacks();
    expect(packs).toContain('nhs');
    expect(packs).toContain('govuk');
    expect(packs).toContain('financial-services');
  });
});
