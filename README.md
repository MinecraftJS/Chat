# Chat

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/MinecraftJS/Chat/Build?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/MinecraftJS/Chat?style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/@minecraft-js/Chat?style=for-the-badge)

Parse and serialize Minecraft chat messages. Provides builders to make it easy to do.

# Documentation

## Installation

Install the package:

```bash
$ npm install @minecraft-js/chat
```

And then import it in your JavaScript/TypeScript file

```ts
const chat = require('@minecraft-js/chat').default; // CommonJS

import * as chat from '@minecraft-js/chat'; // ES6
```

## Build a message

```js
const component = new chat.StringComponentBuilder();
component
.setText('Hello World') // Set the text to 'Hello World'
.setColor(chat.MinecraftColor.RED) // Set the color to red
.setBold(true); // Set the bold flag to true
// And so on, all fields are handled by the builder
```

## Parse a message

```js
const message = '{"translate":"chat.type.text","with":[{"text":"Herobrine","clickEvent":{"action":"suggest_command","value":"/msg Herobrine "},"hoverEvent":{"action":"show_entity","value":"{id:f84c6a79-0a4e-45e0-879b-cd49ebd4c4e2,name:Herobrine}"},"insertion":"Herobrine"},{"text":"I don\'t exist"}]}'
const parsed = chat.ComponentBuilder.parse(message);

console.log(parsed.component.translate); // chat.type.text
parsed.setTranslate('chat.whatever');
console.log(parsed.component.translate); // chat.whatever
```


Everything is typed and documented as well. (Most of the documentation is a copy paste from [Wiki.vg](https://wiki.vg/Chat)