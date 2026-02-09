# Deployment Guide

## Local Development

### Setup
```bash
# Clone repository
git clone https://github.com/marrobi/product-dev-copilot.git
cd product-dev-copilot

# Install dependencies
cd src
npm install

# Build
npm run build

# Run tests
cd ../tests
npm install
npm test
```

### Running Locally
```bash
cd src
npm start
```

## Azure Deployment

### Prerequisites
- Azure subscription
- Azure CLI installed
- Node.js 20.x runtime

### Option 1: Azure Web App

```bash
# Login to Azure
az login

# Create resource group
az group create --name product-discovery-rg --location uksouth

# Create App Service plan
az appservice plan create \
  --name product-discovery-plan \
  --resource-group product-discovery-rg \
  --sku B1 \
  --is-linux

# Create Web App
az webapp create \
  --name product-discovery-copilot \
  --resource-group product-discovery-rg \
  --plan product-discovery-plan \
  --runtime "NODE:20-lts"

# Deploy code
cd src
az webapp up \
  --name product-discovery-copilot \
  --resource-group product-discovery-rg
```

### Option 2: Azure Container Instance

```bash
# Build Docker image (create Dockerfile first)
docker build -t product-discovery-copilot:latest .

# Tag for Azure Container Registry
docker tag product-discovery-copilot:latest \
  yourregistry.azurecr.io/product-discovery-copilot:latest

# Push to registry
docker push yourregistry.azurecr.io/product-discovery-copilot:latest

# Create container instance
az container create \
  --resource-group product-discovery-rg \
  --name product-discovery \
  --image yourregistry.azurecr.io/product-discovery-copilot:latest \
  --cpu 1 --memory 1.5
```

### Option 3: Azure Functions

For serverless deployment, wrap agents as Azure Functions.

```bash
# Initialize Azure Functions project
npm install -g azure-functions-core-tools@4
func init --typescript

# Create function
func new --template "HTTP trigger" --name GenerateScenario

# Deploy
func azure functionapp publish product-discovery-func
```

## Environment Variables

Create `.env` file:

```bash
# Domain pack to use
DOMAIN_PACK=nhs

# Output path
OUTPUT_PATH=./output

# Logging
LOG_LEVEL=info

# GitHub Copilot SDK (when available)
GITHUB_TOKEN=your_token_here
```

## Security Considerations

### Secrets Management
- Use Azure Key Vault for secrets
- Never commit tokens or keys
- Rotate credentials regularly

### Network Security
- Use private endpoints where possible
- Enable Application Gateway/WAF
- Restrict IP access if needed

### Data Protection
- Enable encryption at rest
- Use HTTPS only
- Implement proper authentication
- Follow domain-specific regulations (GDPR, etc.)

## Monitoring

### Application Insights

```bash
# Create Application Insights
az monitor app-insights component create \
  --app product-discovery-insights \
  --location uksouth \
  --resource-group product-discovery-rg

# Get instrumentation key
az monitor app-insights component show \
  --app product-discovery-insights \
  --resource-group product-discovery-rg \
  --query instrumentationKey
```

Add to code:
```typescript
import appInsights from 'applicationinsights';

appInsights.setup('YOUR_INSTRUMENTATION_KEY')
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .start();
```

### Logging

Use Azure Monitor Logs for centralized logging:
- Application logs
- Performance metrics
- Error tracking
- User analytics

## Scaling

### Horizontal Scaling
- Azure App Service: Auto-scale rules
- Container Instances: Multiple instances
- Functions: Consumption plan auto-scales

### Performance Optimization
- Enable caching for domain packs
- Use CDN for static assets
- Implement request queuing for high load
- Consider async processing for long operations

## Backup & Recovery

### Data Backup
- Store generated outputs in Azure Storage
- Enable versioning
- Regular backups of configuration

### Disaster Recovery
- Multi-region deployment for critical workloads
- Database geo-replication
- Document recovery procedures

## CI/CD Pipeline

See `.github/workflows/ci.yml` for GitHub Actions pipeline.

### Azure DevOps Alternative

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '20.x'
    displayName: 'Install Node.js'

  - script: |
      cd src
      npm install
      npm run build
      npm test
    displayName: 'Build and Test'

  - task: AzureWebApp@1
    inputs:
      azureSubscription: 'Your-Azure-Subscription'
      appName: 'product-discovery-copilot'
      package: '$(System.DefaultWorkingDirectory)/src'
```

## Cost Optimization

### Azure Cost Recommendations
- Use B1 tier for development
- Scale to P1V2+ for production
- Enable auto-shutdown for dev/test
- Use reserved instances for predictable workloads
- Monitor with Cost Management

## Compliance

### NHS Healthcare
- Use UK South or UK West regions
- Enable audit logging
- Implement data residency controls
- Follow NHS Data Security Standards

### GOV.UK Services
- Use UK regions
- Meet Service Standard requirements
- Enable comprehensive logging
- Regular security assessments

### Financial Services
- Implement strong authentication
- Enable comprehensive audit trails
- Data encryption in transit and at rest
- Regular compliance reviews

## Troubleshooting

### Build Failures
- Check Node.js version (20.x required)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

### Runtime Errors
- Check Application Insights logs
- Verify environment variables
- Ensure domain packs are accessible
- Check file system permissions

### Performance Issues
- Enable Application Insights profiling
- Check memory usage
- Review slow query logs
- Optimize domain pack loading

## Support

- GitHub Issues: [Repository Issues](https://github.com/marrobi/product-dev-copilot/issues)
- Azure Support: Create support ticket in Azure Portal
- Documentation: See `/docs` directory
