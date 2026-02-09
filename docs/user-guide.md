# User Guide

## Getting Started

Product Discovery Copilot helps you transform product ideas into actionable deliverables using AI-powered generation tailored to your industry domain.

## Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/marrobi/product-dev-copilot.git
cd product-dev-copilot

# Install dependencies
cd src
npm install

# Build the project
npm run build
```

## Basic Usage

### 1. Choose Your Domain

Select the domain pack that matches your industry:
- `nhs` - NHS Healthcare
- `govuk` - GOV.UK Digital Services
- `financial-services` - FCA-Regulated Financial Services

### 2. Run the Pipeline

```typescript
import { ProductDiscoveryCopilot, Config } from './src/index';

// Create configuration
const config = new Config({
  domainPack: 'nhs',
  outputPath: './output',
  logLevel: 'info'
});

// Initialize copilot
const copilot = new ProductDiscoveryCopilot(config);

// Run the full pipeline
const result = await copilot.runPipeline(
  'A mobile app to help patients track their medications and receive reminders'
);

console.log('Generated:', result);
```

### 3. Review Outputs

The pipeline generates:
- **Scenario**: Structured problem statement
- **Personas**: User profiles with goals and pain points
- **Journey**: Detailed user journey with steps
- **Prototype**: Page definitions for UI
- **Backlog**: GitHub Issues ready to create

## Step-by-Step Workflow

### Step 1: Generate Scenario

```typescript
import { ScenarioAgent, Config } from './src/index';

const config = new Config({ domainPack: 'nhs' });
const agent = new ScenarioAgent(config);

const scenario = await agent.generate(
  'A system to improve patient discharge planning'
);
```

### Step 2: Generate Personas

```typescript
import { PersonaAgent } from './src/index';

const personaAgent = new PersonaAgent(config);
const personas = await personaAgent.generate(scenario.data);

// Export to JSON files
await personaAgent.exportToJSON(
  personas.data,
  './output'
);
```

### Step 3: Create User Journeys

```typescript
import { JourneyAgent } from './src/index';

const journeyAgent = new JourneyAgent(config);

// Get journey suggestions
const suggestions = await journeyAgent.suggestJourneys(
  scenario.data,
  personas.data
);

// Generate detailed journey
const journey = await journeyAgent.generate(
  scenario.data,
  personas.data,
  suggestions.data[0]
);
```

### Step 4: Generate Prototype

```typescript
import { PrototypeAgent } from './src/index';

const prototypeAgent = new PrototypeAgent(config);
const prototype = await prototypeAgent.generate(journey.data);
```

### Step 5: Create Backlog

```typescript
import { BacklogAgent } from './src/index';

const backlogAgent = new BacklogAgent(config);
const backlog = await backlogAgent.generate(journey.data);

// Use backlog.data to create GitHub Issues
```

## Domain-Specific Features

### NHS Healthcare Domain

**Terminology**: Uses proper NHS terminology (GP, trust, referral, etc.)

**Design System**: NHS App Design System components

**Compliance**: Considers GDPR, clinical safety (DCB0129/DCB0160), NHS data protection

**Example**:
```typescript
const config = new Config({ domainPack: 'nhs' });
// Generates NHS-appropriate personas like Clinical Nurse Specialist,
// Consultant, Patient, etc.
```

### GOV.UK Digital Services

**Terminology**: Government service language (citizen, service, transaction)

**Design System**: GOV.UK Design System

**Compliance**: Service Standard (14 points), WCAG 2.1 AA accessibility

**Example**:
```typescript
const config = new Config({ domainPack: 'govuk' });
// Generates government service personas and journeys
```

### Financial Services

**Terminology**: Banking and regulatory terms (KYC, AML, account holder)

**Compliance**: FCA regulations, Consumer Duty, data retention

**Example**:
```typescript
const config = new Config({ domainPack: 'financial-services' });
// Considers FCA regulations and vulnerable customers
```

## Configuration Options

```typescript
const config = new Config({
  domainPack: 'nhs',           // Domain to use
  outputPath: './my-output',    // Where to save outputs
  enableStreaming: true,        // Enable streaming responses
  logLevel: 'debug'             // Logging level: debug, info, warn, error
});
```

## Best Practices

### 1. Be Specific in Descriptions
Instead of: "A health app"
Better: "A mobile app for Type 2 diabetes patients to log blood glucose readings and receive medication reminders"

### 2. Review AI Output
- Always review generated personas for accuracy
- Validate journeys against real user needs
- Check compliance with domain regulations
- Test prototypes with actual users

### 3. Iterate
- Start with one journey, refine, then create more
- Adjust personas based on research
- Update scenarios as understanding grows

### 4. Use Version Control
- Commit generated artifacts
- Track changes over time
- Document decisions

## Troubleshooting

### Domain Pack Not Found
```
Error: Domain pack not found: xyz
```
Solution: Use `nhs`, `govuk`, or `financial-services`

### Output Directory Issues
```
Error: Cannot write to output directory
```
Solution: Ensure the output path exists and is writable

### Build Errors
```
Error: Cannot find module...
```
Solution: Run `npm install` in the src directory

## Advanced Usage

### Creating Custom Domain Packs

1. Create directory: `src/domain-packs/my-domain/`
2. Add `design-system.json`
3. Add `terminology.json`
4. Add `compliance-rules.md`
5. Use: `new Config({ domainPack: 'my-domain' })`

### Extending Agents

Create custom agents by extending base patterns:

```typescript
import { AgentResponse } from './types';
import Config from './config';

export class MyCustomAgent {
  constructor(private config: Config) {}
  
  async generate(input: any): Promise<AgentResponse<any>> {
    // Your implementation
  }
}
```

## Getting Help

- **Documentation**: See `/docs` directory
- **Examples**: Check `/examples` (if available)
- **Issues**: [GitHub Issues](https://github.com/marrobi/product-dev-copilot/issues)
- **Discussions**: GitHub Discussions

## Next Steps

1. Try the basic example above
2. Review generated outputs
3. Customize for your domain
4. Integrate into your workflow
5. Provide feedback to improve the system
