export enum MinecraftFont {
  /** Unicode font */
  UNIFORM = 'minecraft:uniform',
  /** Enchanting table font */
  ALT = 'minecraft:alt',
  /** The default font, which switches based on the user's texture pack */
  DEFAULT = 'minecraft:default',
}

export type MinecraftFontResolvable =
  | 'minecraft:uniform'
  | 'minecraft:alt'
  | 'minecraft:default';

export enum MinecraftColor {
  BLACK = 'black',
  DARK_BLUE = 'dark_blue',
  DARK_GREEN = 'dark_green',
  DARK_AQUA = 'dark_aqua',
  DARK_RED = 'dark_red',
  DARK_PURPLE = 'dark_purple',
  GOLD = 'gold',
  GRAY = 'gray',
  DARK_GRAY = 'dark_gray',
  BLUE = 'blue',
  GREEN = 'green',
  AQUA = 'aqua',
  RED = 'red',
  LIGHT_PURPLE = 'light_purple',
  YELLOW = 'yellow',
  WHITE = 'white',
  RESET = 'reset',
}

export type MinecraftColorResolvable =
  | 'black'
  | 'dark_blue'
  | 'dark_green'
  | 'dark_aqua'
  | 'dark_red'
  | 'dark_purple'
  | 'gold'
  | 'gray'
  | 'dark_gray'
  | 'blue'
  | 'green'
  | 'aqua'
  | 'red'
  | 'light_purple'
  | 'yellow'
  | 'white'
  | 'reset';

export enum ClickEvent {
  /** Opens the given URL in the default web browser. Ignored if the player has opted to disable links in chat; may open a GUI prompting the user if the setting for that is enabled. The link's protocol must be set and must be `http` or `https`, for security reasons. */
  OPEN_URL = 'open_url',
  /** Cannot be used within JSON chat. Opens a link to any protocol, but cannot be used in JSON chat for security reasons. Only exists to internally implement links for screenshots. */
  OPEN_FILE = 'open_file',
  /** Runs the given command. Not required to be a command - clicking this only causes the client to send the given content as a chat message, so if not prefixed with `/`, they will say the given text instead. If used in a book GUI, the GUI is closed after clicking. */
  RUN_COMMAND = 'run_command',
  /** No longer supported; cannot be used within JSON chat. Only usable in 1.8 and below; twitch support was removed in 1.9. Additionally, this is only used internally by the client. On click, opens a twitch user info GUI screen. Value should be the twitch user name. */
  TWITCH_USER_INFO = 'twitch_user_info',
  /** Only usable for messages in chat. Replaces the content of the chat box with the given text - usually a command, but it is not required to be a command (commands should be prefixed with `/`). */
  SUGGEST_COMMAND = 'suggest_command',
  /** Only usable within written books. Changes the page of the book to the given page, starting at 1. For instance, `"value":1` switches the book to the first page. If the page is less than one or beyond the number of pages in the book, the event is ignored. */
  CHANGE_PAGE = 'change_page',
  /** Copies the given text to the client's clipboard when clicked. */
  COPY_TO_CLIPBOARD = 'copy_to_clipboard',
}

export type ClickEventResolvable =
  | 'open_url'
  | 'open_file'
  | 'run_command'
  | 'twitch_user_info'
  | 'suggest_command'
  | 'change_page'
  | 'copy_to_clipboard';

export enum HoverEvent {
  /** The text to display. Can either be a string directly (`"value":"la"`) or a full component (`"value":{"text":"la","color":"red"}`). */
  SHOW_TEXT = 'show_text',
  /** The NBT of the item to display, in the JSON-NBT format (as would be used in `/give`). Note that this is a String and not a JSON object - it should either be set in a String directly (`"value":"{id:35,Damage:5,Count:2,tag:{display:{Name:Testing}}}"`) or as text of a component (`"value":{"text":"{id:35,Damage:5,Count:2,tag:{display:{Name:Testing}}}"}`). If the item is invalid, "Invalid Item!" will be drawn in red instead. */
  SHOW_ITEM = 'show_item',
  SHOW_ENTITY = 'show_entity',
  /**
   * **No longer supported.** Since 1.12, this no longer exists; advancements instead simply use show_text. The ID of an achievement or statistic to display. Example: `"value":"achievement.openInventory"`
   * @deprecated
   */
  SHOW_ACHIEVEMENT = 'show_achievement',
}

export type HoverEventResolvable =
  | 'show_text'
  | 'show_item'
  | 'show_entity'
  | 'show_achievement';

/** All component types have certain fields that represent the style. All of these fields may be skipped, in which case the parent's style will be inherited */
export interface BaseComponent {
  /** If `true`, the component is emboldened */
  bold?: boolean;
  /** If `true`, the component is italicized */
  italic?: boolean;
  /** If `true`, the component is underlined */
  underline?: boolean;
  /** If `true`, the component is struck out */
  strikethrough?: boolean;
  /** If `true`, the component randomly switches between characters of the same width */
  obfuscated?: boolean;
  /** This option is only valid on 1.16+, otherwise the property is ignored */
  font?: MinecraftFont | MinecraftFontResolvable;
  /** Color for the component */
  color?: MinecraftColor | MinecraftColorResolvable | string;
  /** Contains text to insert. Only used for messages in chat. When shift is held, clicking the component inserts the given text into the chat box at the cursor (potentially replacing selected text). Has no effect on other locations at this time. */
  insertion?: string;
  /** Defines an event that occurs when this component is clicked */
  clickEvent?: {
    /** Action the client should take */
    action: ClickEvent | ClickEventResolvable;
    value: string;
  };
  /** Defines an event that occurs when this component hovered over */
  hoverEvent?: {
    /** Action the client should take */
    action: HoverEvent;
    value: string;
  };
  /** An array of sibling components. If present, cannot be empty. */
  extra?: ComponentResolvable[];
}

export type ComponentResolvable =
  | BaseComponent
  | StringComponent
  | TranslationComponent
  | KeybindComponent
  | ScoreComponent
  | SelectorComponent;

/** A String component contains only text. The only content of this component is its text, with no additional processing */
export interface StringComponent extends BaseComponent {
  text: string;
}

/** Translates text into the current language */
export interface TranslationComponent extends BaseComponent {
  /** Translation key */
  translate: string;
}

/** Displays the client's current keybind for the specified key. The value is named after the keys in options.txt (for instance, for `key_key.forward` in options.txt, `key.forward` would be used in the component and W would be displayed). For keys that are not known, the value provided should be displayed instead (for instance `key.invalid` would remain as `key.invalid`) */
export interface KeybindComponent extends BaseComponent {
  /** Keybind to display */
  keybind: string;
}

/** Displays a score */
export interface ScoreComponent extends BaseComponent {
  /** Data about the objective */
  score: {
    /** Player username or entity UUID (if it is a player, it is a username). Can be an entity selector (that selects one entity), or alternatively `*` which matches the sending player. */
    name: string;
    /** Name of the objective */
    objective: string;
    /** Resolved value of that objective. When being sent to the server, `value` is not used */
    value: string;
  };
}

/** Displays the results of an entity selector. **Should not be sent to clients**; only intended for commands and client-to-server actions. The server resolves the list selector into a list of entities, each with an appropriate hover event, joined with commas between each entry, without an "and". */
export interface SelectorComponent extends BaseComponent {
  selector: string;
}
