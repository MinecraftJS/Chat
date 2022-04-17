import {
  BaseComponent,
  MinecraftColor,
  MinecraftColorResolvable,
  MinecraftFont,
  MinecraftFontResolvable,
} from '../schema';

/** ComponentBuilder class, build components with it */
export default class ComponentBuilder {
  public component: BaseComponent = {};

  /**
   * Set the new bold value
   * @param bold Whether or not the component should be bold
   * @returns The builder instance
   */
  public setBold(bold: boolean): ComponentBuilder {
    this.component.bold = bold;
    return this;
  }

  /**
   * Set the new italic value
   * @param italic Whether or not the component should be italic
   * @returns The builder instance
   */
  public setItalic(italic: boolean): ComponentBuilder {
    this.component.italic = italic;
    return this;
  }

  /**
   * Set the new underline value
   * @param underline Whether or not the component should be underlined
   * @returns The builder instance
   */
  public setUnderline(underline: boolean): ComponentBuilder {
    this.component.underline = underline;
    return this;
  }

  /**
   * Set the new strikethrough value
   * @param strikethrough Whether or not the component should be strikethrough
   * @returns The builder instance
   */
  public setStrikethrough(strikethrough: boolean): ComponentBuilder {
    this.component.strikethrough = strikethrough;
    return this;
  }

  /**
   * Set the new obfuscated value
   * @param obfuscated Whether or not the component should be obfuscated
   * @returns The builder instance
   */
  public setObfuscated(obfuscated: boolean): ComponentBuilder {
    this.component.obfuscated = obfuscated;
    return this;
  }

  /**
   * Set the new font value
   * @param font The new font value
   * @returns The builder instance
   */
  public setFont(
    font: MinecraftFont | MinecraftFontResolvable
  ): ComponentBuilder {
    this.component.font = font;
    return this;
  }

  /**
   * Set the new color value
   * @param color The new color value
   * @returns The builder instance
   */
  public setColor(
    color: MinecraftColor | MinecraftColorResolvable | string
  ): ComponentBuilder {
    this.component.color = color;
    return this;
  }

  /**
   * Set the new insertion value
   * @param insertion The new insertion value
   * @returns The builder instance
   */
  public setInsertion(insertion: string): ComponentBuilder {
    this.component.insertion = insertion;
    return this;
  }

  /**
   * Set the new clickEvent value
   * @param clickEvent The new clickEvent value
   * @returns The builder instance
   */
  public setClickEvent(
    clickEvent: BaseComponent['clickEvent']
  ): ComponentBuilder {
    this.component.clickEvent = clickEvent;
    return this;
  }

  /**
   * Set the new hoverEvent value
   * @param hoverEvent The new hoverEvent value
   * @returns The builder instance
   */
  public setHoverEvent(
    hoverEvent: BaseComponent['hoverEvent']
  ): ComponentBuilder {
    this.component.hoverEvent = hoverEvent;
    return this;
  }

  /**
   * Add an extra component to the current component
   * @param extra Extra component to add
   * @returns The builder instance
   */
  public addExtra(extra: ComponentBuilder): ComponentBuilder {
    if (!this.component.extra) this.component.extra = [];

    this.component.extra.push(extra.component);
    return this;
  }

  /**
   * Stringify the component
   * @returns The JSON representation of the component
   */
  public toString(): string {
    return JSON.stringify(this.component);
  }

  /**
   * Parse a JSON string into a component
   * @param component The component to build from
   * @returns The builder instance created from the JSON
   */
  public static parse(component: string): ComponentBuilder {
    const instance = new ComponentBuilder();
    instance.component = JSON.parse(component);
    return instance;
  }
}
