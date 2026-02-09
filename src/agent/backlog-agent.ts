import { UserJourney, BacklogItem, AgentResponse } from '../types';
import Config from '../config';

/**
 * Backlog Agent - Converts user journeys into GitHub Issues
 * 
 * Transforms user journeys into structured backlog items (epics, stories, tasks)
 * ready to be created as GitHub Issues.
 */
export class BacklogAgent {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Convert journey to backlog items
   */
  async generate(journey: UserJourney): Promise<AgentResponse<BacklogItem[]>> {
    try {
      this.config.log('info', `BacklogAgent: Generating backlog for ${journey.title}`);

      const items: BacklogItem[] = [];

      // Create epic for the journey
      const epic: BacklogItem = {
        type: 'epic',
        title: journey.title,
        description: `## Goal\n${journey.successCriteria}\n\n## Duration\n${journey.duration}`,
        acceptanceCriteria: [
          journey.successCriteria
        ],
        labels: ['epic', 'user-journey']
      };
      items.push(epic);

      // Create stories for each major step
      journey.mainFlow.forEach((step) => {
        const story: BacklogItem = {
          type: 'story',
          title: `As a ${step.actor}, ${step.action}`,
          description: `**Action:** ${step.action}\n\n**System Response:** ${step.systemResponse}`,
          acceptanceCriteria: [
            `User can ${step.action}`,
            `System ${step.systemResponse}`
          ],
          labels: ['story', 'user-journey'],
          parent: journey.title
        };
        items.push(story);
      });

      return { success: true, data: items };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export default BacklogAgent;
