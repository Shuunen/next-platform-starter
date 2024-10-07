import { messages } from 'app/messages'
import { $t } from 'utils/translate'

export default function LangPage ({ params: { lang } }) {
  return <div className="flex flex-col items-center justify-center min-h-screen gap-6">
    <h1 className="text-4xl">{$t(lang, messages.general.helloWorld)}</h1>
    <span className={`${lang === 'en' ? 'text-orange-600 -rotate-6' : 'text-purple-600 rotate-6'} text-5xl relative inline-block`}>( ͡° ͜ʖ ͡°)</span>
    <a href={lang === 'en' ? '/fr' : '/en'} className="mt-4 p-2 bg-accent-600 text-white rounded">
      {$t(lang, messages.actions.switchLang)}
    </a>
    <pre>Lang in path : {lang}</pre>
  </div>
}