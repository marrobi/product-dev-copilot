# Product Discovery Copilot

Multi-domain product discovery toolkit powered by GitHub Copilot SDK.

## Overview

Transform ideas into actionable product artifacts across multiple industry domains:
- **NHS Healthcare** - NHS App design system, clinical terminology, health regulations
- **GOV.UK Digital Services** - GOV.UK design system, government terminology, service standards  
- **FCA-Regulated Financial Services** - Banking design patterns, financial terminology, FCA regulations

## What It Generates

From a simple idea description, generates:
- ✅ **Scenario & Problem Statement** - Structured, domain-appropriate context
- ✅ **Evidence-Based Personas** - User profiles with goals, wants, and pain points
- ✅ **User Journeys** - Detailed workflows with Mermaid diagrams
- ✅ **Clickable Prototypes** - UI pages using domain design systems
- ✅ **GitHub Backlog** - Issues structured as epics, stories, and tasks

## Quick Start

### New: TypeScript SDK (Stages 1 & 2 Complete)

```bash
# Install dependencies
cd src
npm install
npm run build

# Run the pipeline
npm start
```

See [docs/user-guide.md](docs/user-guide.md) for detailed usage.

### Legacy: VS Code Copilot Chat Workflow

The original NHS-specific workflow is still available:

1. **Scenario + Problem Statement** (VSCode Copilot Chat)
   - Run `/generate_scenario_and_problem_statement` <description>
   - Save in `scenarios/scenario.md`

2. **Personas** (Microsoft 365 Copilot → Researcher)
   - Use [personas/persona-generation-prompt.md](personas/persona-generation-prompt.md)
   - Save to: `personas/persona-report.md`

3. **Slides** (VS Code Copilot Chat)
   - Run `/generate_persona_slides_from_report` personas/persona-report.md
   - Preview: Ctrl/Cmd + Shift + V

4. **User Journeys** (VS Code Copilot Chat)
   - Run `/generate_user_journeys`
   - Output: `user_journeys/generated/`

5. **Prototype** (VS Code Copilot Chat)
   - Run `/build_nhs_app_prototype_from_user_journey`
   - Output: `prototype/` (http://localhost:3000/frame)

## Repository Structure

```
/
├── src/                          # TypeScript/Node.js SDK application
│   ├── agent/                    # Core agents (scenario, persona, journey, etc.)
│   ├── domain-packs/             # Domain configurations (NHS, GOV.UK, Financial)
│   ├── config.ts                 # Configuration management
│   ├── types.ts                  # TypeScript interfaces
│   └── index.ts                  # Main entry point
├── tests/                        # Comprehensive test suite
│   ├── unit/                     # Unit tests for agents
│   └── integration/              # Integration tests
├── docs/                         # Documentation
│   ├── README.md                 # Main documentation
│   ├── architecture.md           # System architecture
│   ├── user-guide.md             # Usage guide
│   ├── responsible-ai.md         # AI practices
│   └── deployment-guide.md       # Deployment instructions
├── .github/
│   ├── workflows/ci.yml          # CI/CD pipeline
│   └── prompts/                  # Legacy Copilot Chat prompts
├── personas/                     # Legacy persona generation tools
├── user_journeys/                # Legacy journey templates
├── AGENTS.md                     # Custom agent instructions
├── mcp.json                      # MCP server configuration
└── README.md                     # This file
```

## Documentation

- 📖 [User Guide](docs/user-guide.md) - How to use the toolkit
- 🏗️ [Architecture](docs/architecture.md) - System design and components
- 🤖 [Responsible AI](docs/responsible-ai.md) - AI practices and limitations
- 🚀 [Deployment Guide](docs/deployment-guide.md) - Azure deployment

## Domain Packs

Each domain pack includes:
- **Design System**: Components, colors, patterns
- **Terminology**: Domain-specific language and abbreviations
- **Compliance Rules**: Regulations and standards

Available domains:
- `nhs` - NHS Healthcare (NHS App, GDPR, Clinical Safety)
- `govuk` - GOV.UK Services (GOV.UK Design System, Service Standard)
- `financial-services` - Financial Services (FCA, AML/KYC, Consumer Duty)

## Prerequisites

- Node.js 20.x or higher
- TypeScript 5.x
- GitHub Copilot SDK access (for AI features)

For legacy workflow:
- VS Code with Copilot extension
- Microsoft 365 Copilot access (for Researcher)

Run verification: `./setup-check.sh` (macOS/Linux) or `./setup-check.ps1` (Windows)

## Contributing

1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes
3. Run tests: `cd tests && npm test`
4. Submit PR

## License

MIT