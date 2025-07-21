import { randomUUID } from 'node:crypto'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { prompt, templateId } = body as { prompt: string; templateId: string }

  // Имитация задержки AI
  await new Promise((r) => setTimeout(r, 1000))

  // Мок-ответ
  const text = `AI response for template ${templateId}: ${prompt}`
  const tokensCount = Math.floor(Math.random() * 100) + 10

  return {
    id: randomUUID(),
    text,
    tokensCount,
    templateId,
    prompt,
    createdAt: new Date().toISOString(),
  }
}) 