import { KeybindComponent } from '../schema';
import ComponentBuilder from './ComponentBuilder';

/** KeybindComponentBuilder class, build keybind components with it */
export default class KeybindComponentBuilder extends ComponentBuilder {
  public component: KeybindComponent = { keybind: '' };

  /**
   * Set the new keybind value
   * @param keybind The new keybind value
   * @returns The builder instance
   */
  public setKeybind(keybind: string): KeybindComponentBuilder {
    this.component.keybind = keybind;
    return this;
  }
}
