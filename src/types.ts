/**
 * Domain pack configuration for product discovery
 */
export interface DomainPack {
  name: string;
  displayName: string;
  description: string;
  designSystem: DesignSystem;
  prototypeKit?: PrototypeKit;
}

export interface DesignSystem {
  name: string;
  url: string;
  components: string[];
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    [key: string]: string;
  };
}

export interface PrototypeKit {
  repository: string;
  templatePath: string;
}

/**
 * Terminology for domain-specific language
 */
export interface Terminology {
  domain: string;
  terms: Record<string, string>;
  abbreviations: Record<string, string>;
}

/**
 * Scenario and problem statement structure
 */
export interface Scenario {
  overview: string;
  problemStatement: string;
  domain: string;
  stakeholders: string[];
  workflowStages?: string[];
}

/**
 * Persona structure matching existing schema
 */
export interface Persona {
  name: string;
  jobTitle: string;
  slideTitle: string;
  experience: string;
  location: string;
  department: string;
  photo?: string;
  photoPrompt?: string;
  background: string[];
  goals: string[];
  wants: string[];
  painPoints: string[];
}

/**
 * User journey structure
 */
export interface UserJourney {
  title: string;
  primaryActor: string;
  duration: string;
  preconditions: string;
  successCriteria: string;
  mainFlow: JourneyStep[];
  decisionPoints?: DecisionPoint[];
  touchpoints?: Touchpoints;
  painPoints?: string[];
}

export interface JourneyStep {
  step: number;
  actor: string;
  action: string;
  systemResponse: string;
  notes?: string;
}

export interface DecisionPoint {
  decision: string;
  pathA: string;
  pathB: string;
}

export interface Touchpoints {
  digital: string[];
  physical: string[];
  people: string[];
}

/**
 * Prototype page definition
 */
export interface PrototypePage {
  path: string;
  title: string;
  content: string;
  components: string[];
  routes?: Route[];
}

export interface Route {
  path: string;
  handler: string;
  method: 'GET' | 'POST';
}

/**
 * GitHub issue structure for backlog
 */
export interface BacklogItem {
  type: 'epic' | 'story' | 'task';
  title: string;
  description: string;
  acceptanceCriteria: string[];
  labels: string[];
  assignees?: string[];
  parent?: string; // For stories/tasks under epics
}

/**
 * Agent response type for streaming
 */
export interface AgentResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  streaming?: boolean;
}

/**
 * Configuration for the Product Discovery Copilot
 */
export interface ProductDiscoveryConfig {
  domainPack: string;
  outputPath: string;
  enableStreaming: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}
