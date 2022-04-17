// @ts-check

const {
  StringComponentBuilder,
  MinecraftColor,
  KeybindComponentBuilder,
  ScoreComponentBuilder,
} = require('../dist');

const hello = new StringComponentBuilder()
  .setText('Hello')
  .setColor(MinecraftColor.GREEN)
  .setBold(true);
const world = new StringComponentBuilder()
  .setText('World')
  .setColor(MinecraftColor.RED)
  .setItalic(true)
  .setBold(true);
const keybind = new KeybindComponentBuilder()
  .setKeybind('key.sneak')
  .setColor(MinecraftColor.YELLOW)
  .setItalic(true);
const score = new ScoreComponentBuilder()
  .setScore({ name: '*', objective: 'idk', value: '1' })
  .setColor(MinecraftColor.GRAY);

console.log(
  new StringComponentBuilder()
    .addExtra(hello)
    .addExtra(world)
    .addExtra(keybind)
    .addExtra(score)
    .toString()
);

const str =
  '{"text":"","extra":[{"text":"Hello","color":"green","bold":true},{"text":"World","color":"red","italic":true,"bold":true},{"keybind":"key.sneak","color":"yellow","italic":true},{"score":{"name":"*","objective":"idk","value":"1"},"color":"gray"}]}';
console.log(StringComponentBuilder.parse(str));
