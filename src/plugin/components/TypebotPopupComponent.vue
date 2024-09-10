<script setup lang="ts">
import {onMounted} from 'vue'

interface Props {
  config: object
}

const props = withDefaults(defineProps<Props>(), {})
onMounted(() => {
  const typebotInitScript = document.createElement("script");
  typebotInitScript.type = "module";

  typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.12/dist/web.js'
  Typebot.initPopup(${JSON.stringify(props.config)});
`;
  document.body.append(typebotInitScript);
})
</script>