import { fillTemplate } from 'shuutils'

export const defaultLang = 'en'

export function handlePlural (translated, data) {
  if (!translated.includes('|')) return fillTemplate(translated, data)
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const count = Number.parseInt(String(data?.['count'] ?? '1'), 10)
  const [a = '', b = '', c = ''] = translated.split(' | ') // eslint-disable-line id-length
  if (c.length > 0 && count > 1) return fillTemplate(c, data)
  if ((c.length > 0 && count === 1) || (b.length > 0 && count > 1)) return fillTemplate(b, data)
  return fillTemplate(a, data)
}

export function $t (lang, message, data) {
  const translated = typeof message === 'string' ? message : message[lang]
  if (translated === undefined) return `missing translation for message "${JSON.stringify(message)}" and lang "${lang}"`
  return handlePlural(translated, data)
}
