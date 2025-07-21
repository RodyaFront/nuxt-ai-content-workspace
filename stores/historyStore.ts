import { defineStore } from 'pinia'
import type { GeneratedItem } from '~/types/GeneratedItem'

const STORAGE_KEY = 'ai-content-history'

function loadHistory(): GeneratedItem[] {
  if (import.meta.client) {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  }
  return []
}

function saveHistory(history: GeneratedItem[]) {
  if (import.meta.client) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  }
}

export const useHistoryStore = defineStore('history', {
  state: () => ({
    items: [] as GeneratedItem[],
  }),
  actions: {
    add(item: GeneratedItem) {
      this.items.unshift(item)
      saveHistory(this.items)
    },
    remove(id: string) {
      this.items = this.items.filter(i => i.id !== id)
      saveHistory(this.items)
    },
    clearAll() {
      this.items = []
      saveHistory(this.items)
    },
    load() {
      this.items = loadHistory()
    },
  },
}) 