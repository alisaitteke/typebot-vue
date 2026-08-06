

# Componentes de Vue 3 para [Typebot](https://typebot.io/)

<img src="https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/vue-logo.svg" alt="drawing" height="40"/>
<img src="https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/typebot-logo.svg" alt="drawing" height="40"/>

### Instalación
```shell
yarn add @alisaitteke/typebot-vue
npm install @alisaitteke/typebot-vue
pnpm add @alisaitteke/typebot-vue
```

---
### ¿Qué es Typebot?
[Typebot](https://typebot.io/) te permite construir chatbots personalizables que pueden integrarse en sitios web o aplicaciones, facilitando la interacción con los usuarios de manera amigable y automatizada. La plataforma ofrece una interfaz de arrastrar y soltar, lo que hace sencillo crear conversaciones, formularios y flujos de trabajo para interactuar con los usuarios.

---
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/screenshot.png)

## Componentes

### Vista Estándar 
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/standard.svg)

Este componente integra Typebot en un formato estándar. El bot se muestra directamente en la página.

#### Ejemplo de uso
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
### Vista Popup
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/popup.svg)


Este componente muestra Typebot como una ventana emergente. Puedes controlar cuándo aparece automáticamente la ventana emergente utilizando autoShowDelay después de que la página se haya cargado.

#### Ejemplo de uso
```vue
<template>
  <type-bot-popup :config="typeBotPopupConfig"></type-bot-popup>
</template>

<script setup lang="ts">
const typeBotPopupConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  autoShowDelay: 1000, // La ventana emergente aparecerá automáticamente después de 1 segundo
}
</script>
```
---
### Vista de Burbuja
![screenshot](https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/components/bubble.svg)

Este componente muestra una burbuja de chat en la esquina de la página. Cuando el usuario hace clic en la burbuja, se abre el chatbot. También puedes personalizar el tema y el mensaje de vista previa que se muestra en la burbuja.

#### Ejemplo de uso
```vue
<template>
  <type-bot-bubble :config="typeBotBubbleConfig"></type-bot-bubble>
</template>

<script setup lang="ts">
const typeBotBubbleConfig = {
  typebot: "product-recommendation-bn4nu5j",
  apiHost: "https://typebot.co",
  previewMessage: { message: "¡Tengo una pregunta para ti!" },
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

<img src="https://raw.githubusercontent.com/alisaitteke/typebot-vue/master/public/icons/nuxt-logo.svg" alt="drawing" height="70"/>

## Uso con Nuxt.js

Para usar el plugin de Vue Typebot en un proyecto Nuxt.js, sigue estos pasos:

### Paso 1. Crea un archivo de plugin
En tu proyecto Nuxt.js, crea un archivo `typebot.client.js` en el directorio `plugins/`:

```js
// plugins/typebot.client.js
import { defineNuxtPlugin } from '#app'
import TypebotVue from '@alisaitteke/typebot-vue'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(TypebotVue)
})
```

### Paso 2. Registra el plugin en nuxt.config.js
Agrega la siguiente entrada a tu nuxt.config.js para registrar el plugin:

```js
export default {
  plugins: [
    { src: '~/plugins/typebot.client.js', mode: 'client' }
  ]
}
```

Esta configuración garantiza que el plugin de Vue Typebot se inicialice únicamente en el lado del cliente en tu proyecto Nuxt.js.


---

### ¿Por qué nombres de componentes personalizados?
Normalmente, los nombres de los componentes seguirían la convención de nomenclatura estándar como ```typebot-standard```. Sin embargo, para evitar conflictos con los propios objetos DOM de Typebot y sus convenciones de nomenclatura, utilizamos nombres personalizados como ```type-bot-standard```, ```type-bot-popup``` y ```type-bot-bubble```. Este pequeño ajuste garantiza una integración fluida y evita posibles problemas con la estructura interna de Typebot.

---
# Descargo de responsabilidad
Este proyecto es un plugin no oficial de Vue.js para integrar Typebot en aplicaciones web. [Typebot](https://typebot.io/) es una marca registrada de sus respectivos propietarios. Este plugin no está afiliado ni respaldado por el equipo de [Typebot](https://typebot.io/). Para información oficial, visita [typebot.io](https://typebot.io/).
