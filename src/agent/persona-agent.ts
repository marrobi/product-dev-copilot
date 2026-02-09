import { Scenario, Persona, AgentResponse } from '../types';
import Config from '../config';

/**
 * Persona Agent - Generates evidence-based personas
 * 
 * Given a scenario, generates 3-6 personas with backgrounds, goals,
 * wants, and pain points. Output matches the existing persona schema.
 */
export class PersonaAgent {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Generate personas for a given scenario
   * 
   * @param scenario - The scenario context
   * @param count - Number of personas to generate (default: 5)
   * @returns Array of persona objects
   */
  async generate(scenario: Scenario, count: number = 5): Promise<AgentResponse<Persona[]>> {
    try {
      this.config.log('info', `PersonaAgent: Generating ${count} personas`);

      // Load domain terminology
      const terminology = await this.config.loadTerminology(scenario.domain);

      // In production, this would use GitHub Copilot SDK to generate
      // evidence-based personas with research citations
      const personas: Persona[] = [];

      for (let i = 0; i < count; i++) {
        personas.push(this.generatePersona(scenario, terminology, i));
      }

      this.config.log('info', `PersonaAgent: Generated ${personas.length} personas`);

      return {
        success: true,
        data: personas
      };
    } catch (error) {
      this.config.log('error', `PersonaAgent error: ${error}`);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Generate a single persona
   */
  private generatePersona(scenario: Scenario, terminology: any, index: number): Persona {
    // Placeholder persona generation
    // In production, would use AI to create realistic, evidence-based personas
    
    const persona: Persona = {
      name: `Persona ${index + 1}`,
      jobTitle: `Role Title ${index + 1}`,
      slideTitle: `ROLE ${index + 1}`,
      experience: `${3 + index} years experience`,
      location: scenario.domain === 'nhs' ? 'NHS Trust' : 'Organization',
      department: 'Department Name',
      photoPrompt: 'Professional photo description',
      background: [
        'Background point 1',
        'Background point 2',
        'Background point 3'
      ],
      goals: [
        'Goal 1: Primary objective',
        'Goal 2: Secondary objective',
        'Goal 3: Long-term aspiration'
      ],
      wants: [
        'Want 1: Daily workflow need',
        'Want 2: Technology expectation',
        'Want 3: Support requirement'
      ],
      painPoints: [
        'Pain point 1: Current frustration',
        'Pain point 2: Workflow bottleneck',
        'Pain point 3: System limitation'
      ]
    };

    return persona;
  }

  /**
   * Export personas to JSON files
   */
  async exportToJSON(personas: Persona[], outputDir: string): Promise<void> {
    const fs = await import('fs');
    const path = await import('path');

    this.config.ensureOutputDir();
    
    const personasDir = path.join(outputDir, 'personas', 'data');
    if (!fs.existsSync(personasDir)) {
      fs.mkdirSync(personasDir, { recursive: true });
    }

    for (const persona of personas) {
      const filename = persona.name.toLowerCase().replace(/\s+/g, '-') + '.json';
      const filepath = path.join(personasDir, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(persona, null, 2));
      this.config.log('debug', `Exported persona to ${filepath}`);
    }

    this.config.log('info', `Exported ${personas.length} personas to ${personasDir}`);
  }

  /**
   * Validate persona structure
   */
  validate(persona: Persona): boolean {
    if (!persona.name || !persona.jobTitle) {
      this.config.log('warn', 'Persona missing name or job title');
      return false;
    }

    if (!persona.background || persona.background.length === 0) {
      this.config.log('warn', 'Persona missing background');
      return false;
    }

    if (!persona.goals || persona.goals.length === 0) {
      this.config.log('warn', 'Persona missing goals');
      return false;
    }

    if (!persona.painPoints || persona.painPoints.length === 0) {
      this.config.log('warn', 'Persona missing pain points');
      return false;
    }

    return true;
  }
}

export default PersonaAgent;
