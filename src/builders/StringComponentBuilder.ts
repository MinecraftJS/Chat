import { StringComponent } from '../schema';
import ComponentBuilder from './ComponentBuilder';

/** StringComponentBuilder class, build string components with it */
export default class StringComponentBuilder extends ComponentBuilder {
  public component: StringComponent = { text: '' };

  /**
   * Set the new text value
   * @param text The new text value
   * @returns The builder instance
   */
  public setText(text: string): StringComponentBuilder {
    this.component.text = text;
    return this;
  }
}
