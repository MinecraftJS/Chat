import { TranslationComponent } from '../schema';
import ComponentBuilder from './ComponentBuilder';

/** TranslationComponent class, build translation components with it */
export default class TranslationComponentBuilder extends ComponentBuilder {
  public component: TranslationComponent = { translate: '' };

  /**
   * Set the new translate value
   * @param translate The new translate value
   * @returns The builder instance
   */
  public setTranslate(translate: string): TranslationComponentBuilder {
    this.component.translate = translate;
    return this;
  }
}
