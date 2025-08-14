<script setup>
// import { useRoot } from './use-root.js'
// import { ref } from 'vue'

const props = defineProps({
  theme: { type: Object, required: true },
  namespace: { type: String, default: '' }
})

const root = useRoot(props.theme, { namespace: props.namespace })

const setTheme = (newTheme) => {
  root.use(newTheme)
}

defineExpose({ setTheme })
</script>

<template>
  <slot />
</template>
