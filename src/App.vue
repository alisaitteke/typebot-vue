<template>
  <type-bot-standard :config="typeBotStandardConfig"></type-bot-standard>
  <type-bot-popup :config="typeBotPopupConfig"></type-bot-popup>
  <type-bot-bubble :config="typeBotBubbleConfig"></type-bot-bubble>
</template>
<script setup lang="ts">

const typeBotStandardConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
}
const typeBotPopupConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  autoShowDelay: 1000,
}
const typeBotBubbleConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  previewMessage: {message: "I have a question for you!"},
  theme: {
    button: {backgroundColor: "#4A8BB2", customIconSrc: "🤩", size: "large"},
    previewMessage: {
      backgroundColor: "#598E71",
      textColor: "#FFFFFF",
      closeButtonBackgroundColor: "#9B74B7",
      closeButtonIconColor: "#D09C46",
    },
  },
}
</script>