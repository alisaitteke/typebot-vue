import {App} from "vue";
import TypebotStandardComponent from "./components/TypebotStandardComponent.vue";
import TypebotPopupComponent from "./components/TypebotPopupComponent.vue";
import TypebotBubbleComponent from "./components/TypebotBubbleComponent.vue";

export default {
    install: (app: App, options: any) => {
        app.component('type-bot-standard', TypebotStandardComponent)
        app.component('type-bot-popup', TypebotPopupComponent)
        app.component('type-bot-bubble', TypebotBubbleComponent)
    }
}