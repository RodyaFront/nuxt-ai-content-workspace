import { defineStore } from 'pinia'
import type { Template } from '~/types/Template'

export const useTemplateStore = defineStore('template', {
  state: () => ({
    templates: [] as Template[],
    selectedTemplate: null as Template | null,
  }),
  actions: {
    setTemplates(templates: Template[]) {
      this.templates = templates
    },
    selectTemplate(template: Template) {
      this.selectedTemplate = template
    },
    getTemplateBySlug(slug: string) {
      return this.templates.find(t => t.slug === slug) || null
    },
  },
}) 