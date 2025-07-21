import { ref } from 'vue'
import { useHistoryStore } from '~/stores/historyStore'
import type { GeneratedItem } from '~/types/GeneratedItem'

export const usePromptGenerator = () => {
  const isLoading = ref(false)
  const result = ref<GeneratedItem | null>(null)
  const error = ref<string | null>(null)
  const historyStore = useHistoryStore()

  const generate = async (prompt: string, templateId: string) => {
    isLoading.value = true
    error.value = null
    result.value = null
    try {
      const { data, error: fetchError } = await useFetch('/api/generate', {
        method: 'POST',
        body: { prompt, templateId },
      })
      if (fetchError.value) throw fetchError.value
      if (data.value) {
        result.value = data.value as GeneratedItem
        historyStore.add(result.value)
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        error.value = e.message
      } else if (typeof e === 'string') {
        error.value = e
      } else {
        error.value = 'Ошибка генерации'
      }
    } finally {
      isLoading.value = false
    }
  }

  return { generate, isLoading, result, error }
} 