# Custom Agent Instructions for Product Discovery Copilot

## Project Context

This is Product Discovery Copilot - a multi-domain product discovery toolkit powered by GitHub Copilot SDK. It orchestrates an end-to-end workflow from raw idea to clickable prototype across different industry domains (NHS Healthcare, GOV.UK Digital Services, FCA-Regulated Financial Services).

## Code Style & Conventions

### TypeScript
- Use strict TypeScript with all compiler checks enabled
- Prefer interfaces over types for object shapes
- Use async/await over promises
- Export classes and functions as both named and default exports

### File Organization
- Agents go in `src/agent/`
- Domain packs in `src/domain-packs/{domain-name}/`
- Tests mirror source structure in `tests/`
- Documentation in `docs/`

### Naming Conventions
- Classes: PascalCase (e.g., `ScenarioAgent`)
- Files: kebab-case (e.g., `scenario-agent.ts`)
- Variables/functions: camelCase (e.g., `generateScenario`)
- Constants: UPPER_SNAKE_CASE (e.g., `DEFAULT_CONFIG`)

## Architecture Patterns

### Agent Pattern
All agents follow this structure:
```typescript
class SomeAgent {
  private config: Config;
  
  constructor(config: Config) {
    this.config = config;
  }
  
  async generate(input: InputType): Promise<AgentResponse<OutputType>> {
    try {
      // 1. Log start
      // 2. Load domain context
      // 3. Generate with AI
      // 4. Validate output
      // 5. Return success
    } catch (error) {
      // Return error response
    }
  }
}
```

### Domain Pack Loading
- Domain packs are JSON/Markdown files
- Cached after first load
- Include design systems, terminology, and compliance rules

## Testing Requirements

- All agents must have unit tests
- Test success and error paths
- Mock AI responses for deterministic testing
- Use Jest with ts-jest preset

## Domain-Specific Guidelines

### NHS Healthcare
- Use NHS terminology from terminology.json
- Follow NHS App Design System
- Consider clinical safety (DCB0129/DCB0160)
- GDPR and NHS data protection requirements

### GOV.UK Digital Services
- Follow GOV.UK Service Standard (14 points)
- Use GOV.UK Design System components
- WCAG 2.1 Level AA accessibility required
- Open source and open standards

### Financial Services
- FCA regulations and Consumer Duty
- KYC/AML requirements
- Vulnerable customer considerations
- Data retention rules (5 years minimum)

## When Adding Features

1. Check if it fits existing agent or needs new agent
2. Add appropriate TypeScript types to `types.ts`
3. Implement with error handling and logging
4. Write unit tests
5. Update documentation
6. Consider impact across all domain packs

## AI Generation Guidelines

When generating content with Copilot SDK:
- Include domain pack context in prompts
- Use terminology appropriately
- Consider compliance rules
- Validate AI output before returning
- Log AI interactions for debugging

## Documentation

- Keep README.md up to date
- Document new domain packs
- Update architecture.md for structural changes
- Include code examples for complex features

## Performance

- Cache domain pack data
- Use streaming for long-running operations
- Log performance metrics
- Consider memory usage with large outputs

## Security

- Never commit secrets
- Validate all file paths
- Sanitize user input
- Follow domain-specific data protection rules
- Review AI-generated content for sensitive data

## Questions to Ask Before Implementing

1. Which domain pack(s) does this affect?
2. Does this need new types or interfaces?
3. What are the error scenarios?
4. How will this be tested?
5. Does documentation need updating?
6. Are there compliance implications?
