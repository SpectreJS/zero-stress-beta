import { type FormEvent, useEffect, useRef, useState } from 'react'

type ChatMessage = {
   id: string
   direction: 'incoming' | 'outgoing'
   body: string
   status?: string
   created_at: string
   sender_phone?: string | null
}

type ConversationResponse = {
   success: boolean
   conversation_token?: string
   conversation_id?: number
   visitor_phone_required?: boolean
   messages?: ChatMessage[]
   message?: string
}

const STORAGE_KEY = 'zst_chat_token'
const POLL_INTERVAL_MS = 8000

const mergeMessages = (current: ChatMessage[], next: ChatMessage[]) => {
   const map = new Map<string, ChatMessage>()

   for (const message of [...current, ...next]) {
      const uniqueKey = `${message.direction}:${message.id}:${message.created_at}:${message.body}`
      map.set(uniqueKey, message)
   }

   return Array.from(map.values()).sort((left, right) => {
      const leftValue = new Date(left.created_at).getTime()
      const rightValue = new Date(right.created_at).getTime()
      return leftValue - rightValue
   })
}

const formatMessageTime = (value: string) => {
   const date = new Date(value)

   if (Number.isNaN(date.getTime())) {
      return 'Maintenant'
   }

   return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
   })
}

export function HubChat() {
   const [isOpen, setIsOpen] = useState(false)
   const [messages, setMessages] = useState<ChatMessage[]>([])
   const [draft, setDraft] = useState('')
   const [visitorPhone, setVisitorPhone] = useState('')
   const [visitorName, setVisitorName] = useState('')
   const [consent, setConsent] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [error, setError] = useState('')
   const [conversationToken, setConversationToken] = useState<string | null>(() => {
      if (typeof window === 'undefined') {
         return null
      }

      return window.localStorage.getItem(STORAGE_KEY)
   })

   const listRef = useRef<HTMLDivElement | null>(null)

   const syncConversation = async (tokenOverride?: string) => {
      const token = tokenOverride ?? conversationToken

      if (!token) {
         const createResponse = await fetch('/api/chat/messages.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            },
            body: JSON.stringify({
               visitor_name: visitorName,
               visitor_phone: visitorPhone,
            }),
         })

         const createResult = (await createResponse.json().catch(() => ({}))) as ConversationResponse

         if (!createResponse.ok || !createResult.conversation_token) {
            throw new Error(createResult.message || 'Impossible d’initialiser la conversation.')
         }

         setConversationToken(createResult.conversation_token)
         if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, createResult.conversation_token)
         }

         setMessages((current) => mergeMessages(current, createResult.messages ?? []))
         return createResult.conversation_token
      }

      const response = await fetch('/api/chat/messages.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify({
            conversation_token: token,
            visitor_name: visitorName,
            visitor_phone: visitorPhone,
         }),
      })

      const result = (await response.json().catch(() => ({}))) as ConversationResponse

      if (!response.ok) {
         throw new Error(result.message || 'Impossible de récupérer les messages.')
      }

      if (result.conversation_token) {
         setConversationToken(result.conversation_token)
         if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, result.conversation_token)
         }
      }

      setMessages((current) => mergeMessages(current, result.messages ?? []))
      return result.conversation_token ?? token
   }

   useEffect(() => {
      if (!isOpen) {
         return undefined
      }

      let mounted = true

      const init = async () => {
         setIsLoading(true)
         setError('')

         try {
            await syncConversation()
         } catch (loadError) {
            if (mounted) {
               const message = loadError instanceof Error ? loadError.message : 'Impossible d’ouvrir la conversation.'
               setError(message)
            }
         } finally {
            if (mounted) {
               setIsLoading(false)
            }
         }
      }

      void init()

      const intervalId = window.setInterval(() => {
         void syncConversation().catch(() => undefined)
      }, POLL_INTERVAL_MS)

      return () => {
         mounted = false
         window.clearInterval(intervalId)
      }
   }, [isOpen])

   useEffect(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
   }, [messages, isOpen])

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const trimmedMessage = draft.trim()
      if (!trimmedMessage) {
         return
      }

      if (!visitorPhone.trim()) {
         setError('Un numéro WhatsApp valide est requis pour recevoir votre réponse.')
         return
      }

      if (!consent) {
         setError('Merci d’accepter l’envoi vers WhatsApp Business avant de continuer.')
         return
      }

      setIsSubmitting(true)
      setError('')

      try {
         const token = conversationToken ?? (await syncConversation())

         const response = await fetch('/api/chat/send.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
            },
            body: JSON.stringify({
               conversation_token: token,
               message: trimmedMessage,
               visitor_phone: visitorPhone,
               visitor_name: visitorName,
               consent: true,
            }),
         })

         const result = (await response.json().catch(() => ({}))) as ConversationResponse & {
            data?: ChatMessage
            queued?: boolean
         }

         if (!response.ok) {
            throw new Error(result.message || 'Le message n’a pas pu être transmis.')
         }

         if (result.data) {
            const nextMessage = result.data
            if (nextMessage) {
               setMessages((current) => mergeMessages(current, [nextMessage]))
            }
         }

         setDraft('')
         await syncConversation(token)
      } catch (submitError) {
         const message = submitError instanceof Error ? submitError.message : 'Le message n’a pas pu être transmis.'
         setError(message)
      } finally {
         setIsSubmitting(false)
      }
   }

   return (
      <aside className="fixed bottom-6 right-6 z-40" id="conciergerie-hub">
         {!isOpen ? (
            <button
               type="button"
               onClick={() => setIsOpen(true)}
               className="group flex items-center gap-3 rounded-full bg-inverse-surface px-2 pr-5 py-2 text-surface-container-lowest shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
               <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                  <span className="material-symbols-outlined text-[22px]">support_agent</span>
                  <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-inverse-surface bg-secondary-container animate-pulse" />
               </div>
               <div className="hidden text-left sm:block">
                  <span className="block font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">Conciergerie 24/7</span>
                  <span className="font-body-sm text-body-sm font-medium text-white">Discuter sur WhatsApp</span>
               </div>
            </button>
         ) : (
            <div className="w-[min(92vw,360px)] overflow-hidden rounded-[28px] border border-white/15 bg-[#09131B]/95 text-white shadow-[0_26px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
               <div className="flex items-center justify-between border-b border-white/10 bg-inverse-surface px-4 py-3">
                  <div className="flex items-center gap-3">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                        <span className="material-symbols-outlined text-[20px]">support_agent</span>
                     </div>
                     <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-primary-fixed">Conciergerie</p>
                        <p className="text-sm font-medium text-white">WhatsApp Business</p>
                     </div>
                  </div>
                  <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-1.5 text-white/70 transition hover:bg-white/5 hover:text-white" aria-label="Fermer le chat">
                     <span className="material-symbols-outlined text-lg">close</span>
                  </button>
               </div>

               <div className="space-y-3 border-b border-white/10 bg-white/[0.02] p-3">
                  <input
                     type="text"
                     value={visitorName}
                     onChange={(event) => setVisitorName(event.target.value)}
                     placeholder="Votre prénom"
                     className="w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-primary-container focus:outline-none"
                  />
                  <input
                     type="tel"
                     value={visitorPhone}
                     onChange={(event) => setVisitorPhone(event.target.value)}
                     placeholder="Votre numéro WhatsApp (+33 ... )"
                     className="w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-primary-container focus:outline-none"
                  />
                  <label className="flex items-start gap-2 text-xs text-surface-variant">
                     <input
                        type="checkbox"
                        checked={consent}
                        onChange={(event) => setConsent(event.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-primary-container"
                     />
                     <span>J’accepte d’être recontacté via WhatsApp Business et de recevoir la réponse de la conciergerie.</span>
                  </label>
               </div>

               <div ref={listRef} className="max-h-[360px] space-y-3 overflow-y-auto bg-[#081019] px-3 py-3">
                  {isLoading ? (
                     <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-surface-variant">Chargement de la conversation…</div>
                  ) : messages.length === 0 ? (
                     <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-3 py-2 text-sm text-surface-variant">
                        Votre concierge est disponible pour répondre à toutes vos questions.
                     </div>
                  ) : (
                     messages.map((message) => (
                        <div
                           key={`${message.id}-${message.created_at}`}
                           className={`flex ${message.direction === 'outgoing' ? 'justify-end' : 'justify-start'}`}
                        >
                           <div
                              className={[
                                 'max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm',
                                 message.direction === 'outgoing'
                                    ? 'bg-primary-container text-on-primary-container'
                                    : 'border border-white/10 bg-white/5 text-white',
                              ].join(' ')}
                           >
                              <p className="whitespace-pre-wrap break-words">{message.body}</p>
                              <div className="mt-1 flex items-center justify-between gap-2 text-[10px] opacity-75">
                                 <span>{formatMessageTime(message.created_at)}</span>
                                 {message.direction === 'outgoing' && message.status ? (
                                    <span className="uppercase tracking-[0.08em]">{message.status}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </div>

               {error ? (
                  <div className="border-t border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-100">{error}</div>
               ) : null}

               <form onSubmit={handleSubmit} className="border-t border-white/10 bg-[#09131B] p-3">
                  <div className="flex items-end gap-2">
                     <textarea
                        value={draft}
                        onChange={(event) => setDraft(event.target.value)}
                        rows={1}
                        placeholder="Écrivez votre message…"
                        className="max-h-28 min-h-[44px] flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary-container focus:outline-none"
                     />
                     <button
                        type="submit"
                        disabled={isSubmitting || !draft.trim()}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-container text-on-primary-container transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        aria-label="Envoyer le message"
                     >
                        <span className="material-symbols-outlined text-lg">send</span>
                     </button>
                  </div>
               </form>
            </div>
         )}
      </aside>
   )
}