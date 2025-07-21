export type Template = {
  id: string
  name: string
  description: string
  slug: string
  fields: Array<{ name: string; label: string; type: string }>
}
