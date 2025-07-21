<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useSettingsStore } from '~/stores/settingsStore' // если будет Pinia store для темы

const settings = useSettingsStore()

const applyTheme = () => {
  if (settings.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(applyTheme)
watch(() => settings.theme, applyTheme)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
    <slot />
  </div>
</template>