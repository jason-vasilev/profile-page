<script setup lang="ts">
import { computed } from 'vue'
import { ButtonVariant, ButtonSize } from './button-basic-enum'

const props = defineProps<{
  text: string
  variant?: ButtonVariant
  size?: ButtonSize
}>()

const computedClasses = computed(() => {
  return [
    'button-basic',
    props.variant ? `button-basic--${props.variant}` : '',
    props.size ? `button-basic--${props.size}` : '',
  ]
})
</script>

<template>
  <button :class="computedClasses">
    {{ props.text }}
  </button>
</template>

<style scoped src="./button-basic.scss" />
