# Product Discovery Copilot

Multi-domain product discovery toolkit powered by GitHub Copilot SDK.

## Overview

Product Discovery Copilot transforms the existing NHS-specific product development toolkit into a generalized, multi-domain system. The agent orchestrates an end-to-end product discovery workflow — from raw idea to clickable prototype — and is configurable across multiple industry domains via swappable "domain packs."

## Features

- **Multi-Domain Support**: Works across NHS Healthcare, GOV.UK Digital Services, and FCA-Regulated Financial Services
- **End-to-End Pipeline**: From idea to prototype and backlog
- **Domain-Specific**: Uses appropriate terminology, design systems, and compliance rules
- **AI-Powered**: Leverages GitHub Copilot SDK for intelligent generation
- **Extensible**: Easy to add new domain packs

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- TypeScript 5.x
- GitHub Copilot SDK access

### Installation

```bash
cd src
npm install
npm run build
```

### Usage

```typescript
import { ProductDiscoveryCopilot } from './index';

const copilot = new ProductDiscoveryCopilot();
const result = await copilot.runPipeline('Your product idea here');
```

## Architecture

The system consists of five core agents:

1. **Scenario Agent**: Transforms rough ideas into structured scenarios
2. **Persona Agent**: Generates evidence-based user personas
3. **Journey Agent**: Creates detailed user journeys with diagrams
4. **Prototype Agent**: Generates clickable prototypes
5. **Backlog Agent**: Converts journeys into GitHub Issues

See [architecture.md](architecture.md) for detailed architecture documentation.

## Domain Packs

Domain packs provide domain-specific configuration:

- **NHS Healthcare** (`nhs/`): NHS App design system, UK health terminology, NHS compliance
- **GOV.UK** (`govuk/`): GOV.UK Design System, government terminology, service standards
- **Financial Services** (`financial-services/`): FCA regulations, banking terminology

### Adding a Domain Pack

1. Create directory in `src/domain-packs/your-domain/`
2. Add `design-system.json`
3. Add `terminology.json`
4. Add `compliance-rules.md`

## Testing

```bash
cd tests
npm test
npm run test:watch  # Watch mode
```

## Documentation

- [Architecture](architecture.md)
- [Deployment Guide](deployment-guide.md)
- [User Guide](user-guide.md)
- [Responsible AI](responsible-ai.md)

## License

MIT
