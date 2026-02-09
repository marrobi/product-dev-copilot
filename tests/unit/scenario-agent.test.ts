import ScenarioAgent from '../../agent/scenario-agent';
import Config from '../../config';

describe('ScenarioAgent', () => {
  let config: Config;
  let agent: ScenarioAgent;

  beforeEach(() => {
    config = new Config({ logLevel: 'error' }); // Suppress logs in tests
    agent = new ScenarioAgent(config);
  });

  test('should generate scenario from description', async () => {
    const description = 'A system to help patients manage their medications';
    const result = await agent.generate(description);

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.data?.overview).toContain(description);
    expect(result.data?.domain).toBe('nhs');
  });

  test('should validate scenario structure', async () => {
    const validScenario = {
      overview: 'This is a valid overview with enough content',
      problemStatement: 'This is a valid problem statement',
      domain: 'nhs',
      stakeholders: ['Patient', 'Doctor']
    };

    const isValid = await agent.validate(validScenario);
    expect(isValid).toBe(true);
  });

  test('should reject invalid scenario', async () => {
    const invalidScenario = {
      overview: 'Short',
      problemStatement: '',
      domain: 'nhs',
      stakeholders: []
    };

    const isValid = await agent.validate(invalidScenario);
    expect(isValid).toBe(false);
  });
});
