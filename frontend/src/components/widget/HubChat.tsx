export function HubChat() {
   return (
      <aside className="fixed bottom-6 right-6 z-40" id="conciergerie-hub">
         <a
            className="group flex items-center gap-3 p-2 pr-5 rounded-full bg-inverse-surface text-surface-container-lowest shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300"
            href="https://wa.me/"
            rel="noopener noreferrer"
            target="_blank"
         >
            <div className="relative w-11 h-11 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
               <span className="material-symbols-outlined text-[22px]">support_agent</span>
               <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-secondary-container rounded-full border-2 border-inverse-surface animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
               <span className="font-label-sm text-label-sm text-primary-fixed block uppercase tracking-wider">Conciergerie 24/7</span>
               <span className="font-body-sm text-body-sm font-medium text-white">Discuter sur WhatsApp</span>
            </div>
         </a>
      </aside>
   )
}