import { defineStore } from 'pinia'
import type { Settings } from '~/types/Settings'

const STORAGE_KEY = 'ai-content-settings'

function loadSettings(): Settings {
  if (import.meta.client) {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { theme: 'dark', lang: 'en' }
  }
  return { theme: 'dark', lang: 'en' }
}

function saveSettings(settings: Settings) {
  if (import.meta.client) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'dark' as Settings['theme'],
    lang: 'en' as Settings['lang'],
  }),
  actions: {
    setTheme(theme: Settings['theme']) {
      this.theme = theme
      saveSettings({ theme: this.theme, lang: this.lang })
    },
    setLang(lang: Settings['lang']) {
      this.lang = lang
      saveSettings({ theme: this.theme, lang: this.lang })
    },
    load() {
      const s = loadSettings()
      this.theme = s.theme
      this.lang = s.lang
    },
  },
})
