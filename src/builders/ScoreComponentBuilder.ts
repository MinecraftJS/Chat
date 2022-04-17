import { ScoreComponent } from '../schema';
import ComponentBuilder from './ComponentBuilder';

/** ScoreComponentBuilder class, build score components with it */
export default class ScoreComponentBuilder extends ComponentBuilder {
  public component: ScoreComponent = {
    score: { name: '', objective: '', value: '' },
  };

  /**
   * Set the new score value
   * @param name The new score value
   * @returns The builder instance
   */
  public setScore(score: ScoreComponent['score']): ScoreComponentBuilder {
    this.component.score = score;
    return this;
  }
}
