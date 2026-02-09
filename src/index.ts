/**
 * Product Discovery Copilot
 * 
 * Multi-domain product discovery toolkit powered by GitHub Copilot SDK.
 * Orchestrates end-to-end workflow from raw idea to clickable prototype.
 */

import Config from './config';
import ScenarioAgent from './agent/scenario-agent';
import PersonaAgent from './agent/persona-agent';
import JourneyAgent from './agent/journey-agent';
import PrototypeAgent from './agent/prototype-agent';
import BacklogAgent from './agent/backlog-agent';

export { Config, ScenarioAgent, PersonaAgent, JourneyAgent, PrototypeAgent, BacklogAgent };

/**
 * Main orchestrator for the product discovery pipeline
 */
export class ProductDiscoveryCopilot {
  private config: Config;
  private scenarioAgent: ScenarioAgent;
  private personaAgent: PersonaAgent;
  private journeyAgent: JourneyAgent;
  private prototypeAgent: PrototypeAgent;
  private backlogAgent: BacklogAgent;

  constructor(config?: Config) {
    this.config = config || new Config();
    this.scenarioAgent = new ScenarioAgent(this.config);
    this.personaAgent = new PersonaAgent(this.config);
    this.journeyAgent = new JourneyAgent(this.config);
    this.prototypeAgent = new PrototypeAgent(this.config);
    this.backlogAgent = new BacklogAgent(this.config);
  }

  /**
   * Run the complete product discovery pipeline
   */
  async runPipeline(ideaDescription: string) {
    this.config.log('info', '=== Starting Product Discovery Pipeline ===');

    // Step 1: Generate scenario
    const scenarioResult = await this.scenarioAgent.generate(ideaDescription);
    if (!scenarioResult.success || !scenarioResult.data) {
      throw new Error('Failed to generate scenario');
    }
    const scenario = scenarioResult.data;

    // Step 2: Generate personas
    const personasResult = await this.personaAgent.generate(scenario);
    if (!personasResult.success || !personasResult.data) {
      throw new Error('Failed to generate personas');
    }
    const personas = personasResult.data;

    // Step 3: Suggest journeys
    const journeysResult = await this.journeyAgent.suggestJourneys(scenario, personas);
    if (!journeysResult.success || !journeysResult.data) {
      throw new Error('Failed to suggest journeys');
    }

    // Step 4: Generate first journey
    const journeyResult = await this.journeyAgent.generate(scenario, personas, journeysResult.data[0]);
    if (!journeyResult.success || !journeyResult.data) {
      throw new Error('Failed to generate journey');
    }
    const journey = journeyResult.data;

    // Step 5: Generate prototype
    const prototypeResult = await this.prototypeAgent.generate(journey);
    if (!prototypeResult.success) {
      throw new Error('Failed to generate prototype');
    }

    // Step 6: Generate backlog
    const backlogResult = await this.backlogAgent.generate(journey);
    if (!backlogResult.success) {
      throw new Error('Failed to generate backlog');
    }

    this.config.log('info', '=== Product Discovery Pipeline Complete ===');

    return {
      scenario,
      personas,
      journey,
      prototype: prototypeResult.data,
      backlog: backlogResult.data
    };
  }

  /**
   * Get the configuration instance
   */
  getConfig(): Config {
    return this.config;
  }
}

export default ProductDiscoveryCopilot;
