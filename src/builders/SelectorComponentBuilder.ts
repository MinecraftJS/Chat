import { SelectorComponent } from '../schema';
import ComponentBuilder from './ComponentBuilder';

/** SelectorComponentBuilder class, build selector components with it */
export default class SelectorComponentBuilder extends ComponentBuilder {
  public component: SelectorComponent = { selector: '' };

  /**
   * Set the new selector value
   * @param selector The new selector value
   * @returns The builder instance
   */
  public setSelector(selector: string): SelectorComponentBuilder {
    this.component.selector = selector;
    return this;
  }
}
