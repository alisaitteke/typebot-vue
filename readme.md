# Vue 3 [Typebot](https://typebot.io/) Components

<img src="public/icons/vue-logo.svg" alt="drawing" height="40"/>
<img src="public/icons/typebot-logo.svg" alt="drawing" height="40"/>

### Install
```shell
yarn install @alisaitteke/typebot-vue
npm install @alisaitteke/typebot-vue
pnpm install @alisaitteke/typebot-vue
```

---
### What is Typebot?
[Typebot](https://typebot.io/) enables you to build customizable chatbots that can be embedded into websites or apps, allowing for user interaction in a friendly and automated way. The platform offers a drag-and-drop interface, making it easy to create conversations, forms, and workflows to engage users.

---
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/screenshot.png)

## Components

### Standard View 
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/standard.svg)

This component integrates the Typebot in a standard format. The bot is displayed directly on the page.

#### Example Usage
```vue
<template>
  <type-bot-standard :config="typeBotStandardConfig"></type-bot-standard>
</template>

<script setup lang="ts">
const typeBotStandardConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
}
</script>
```
---
### Popup View
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/popup.svg)


This component displays Typebot as a popup. You can control when the popup automatically appears using autoShowDelay after the page has loaded.

#### Example Usage
```vue
<template>
  <type-bot-popup :config="typeBotPopupConfig"></type-bot-popup>
</template>

<script setup lang="ts">
const typeBotPopupConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  autoShowDelay: 1000, // The popup will appear automatically after 1 second
}
</script>
```
---
### Bubble View
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/bubble.svg)

This component displays a chat bubble in the corner of the page. When the user clicks on the bubble, the chatbot opens. You can also customize the theme and the preview message displayed on the bubble.

#### Example Usage
```vue
<template>
  <type-bot-bubble :config="typeBotBubbleConfig"></type-bot-bubble>
</template>

<script setup lang="ts">
const typeBotBubbleConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  previewMessage: { message: "I have a question for you!" },
  theme: {
    button: { backgroundColor: "#4A8BB2", customIconSrc: "🤩", size: "large" },
    previewMessage: {
      backgroundColor: "#598E71",
      textColor: "#FFFFFF",
      closeButtonBackgroundColor: "#9B74B7",
      closeButtonIconColor: "#D09C46",
    },
  },
}
</script>

```
---

### Why Custom Component Names?
Normally, the component names would follow the standard naming convention like ```typebot-standard```. However, to avoid conflicts with Typebot's own DOM objects and naming conventions, we used custom names such as ```type-bot-standard```, ```type-bot-popup```, and ```type-bot-bubble```. This small adjustment ensures smooth integration and prevents any potential issues with Typebot’s internal structure.
