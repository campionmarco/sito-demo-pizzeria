# AGENTS.md — contesto per agenti AI (Cursor, Claude Code, ecc.)

Questo file dà contesto operativo a qualsiasi agente AI che lavora su questo repo. Leggilo prima di generare o modificare codice.

## Cos'è questo progetto

Sito demo one-page per una pizzeria/ristorante fittizio, usato come **portfolio/demo** da Marco Digital Solutions per convincere ristoranti e pizzerie reali di Rovigo ad acquistare un sito simile. Non è (ancora) il sito di un cliente pagante: è il template di partenza che verrà personalizzato caso per caso.

## Stack e convenzioni

- **Next.js 16 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS 4** per lo styling — usa sempre classi utility Tailwind, evita CSS custom se non necessario
- **shadcn/ui** per i componenti UI base (in `components/ui/`) — riusa questi componenti invece di scriverne di nuovi da zero quando possibile
- Package manager: **pnpm** (non usare npm/yarn per installare pacchetti — evita di generare un secondo lockfile)
- Componenti sezione (`hero`, `reservation-section`, ecc.) sono in `components/`, uno per sezione, importati in ordine in `app/page.tsx`
- **Il menu digitale vive nella sua pagina dedicata**, `app/menu/page.tsx` (route `/menu`), separata dalla home — non va reinserito in `app/page.tsx`. Il link alla pagina va nella navbar (`components/navbar.tsx`).
- Client Components (`"use client"`) solo dove serve interattività (form, tab, stato) — mantieni Server Components di default altrove

## Regole importanti quando modifichi questo codice

1. **Il form prenotazioni (`reservation-section.tsx`) non invia dati da nessuna parte.** È solo validazione client-side + stato locale. Se ti viene chiesto di "far funzionare" la prenotazione, serve aggiungere un vero endpoint (Route Handler in `app/api/.../route.ts`) o un'integrazione (es. Make.com, Resend, ecc.) — non dare per scontato che esista già un backend.
2. **Tutti i dati di contatto, indirizzo, menu e recensioni sono fittizi/placeholder.** Non trattarli come dati reali del cliente. Quando questo template viene adattato per un cliente vero, questi valori vanno sostituiti con i dati reali forniti dal cliente — segnalalo se noti che sono rimasti placeholder in una build "quasi pronta per la consegna".
3. **Non inventare foto reali.** Le immagini in `public/` sono placeholder generici. Non generare né suggerire immagini AI spacciate per foto reali del locale — è una regola esplicita del business (Marco Digital Solutions non consegna mai foto finte come vere ai clienti).
4. **Mobile-first sempre.** I clienti finali di questo tipo di sito lo guardano quasi sempre da telefono — ogni nuova sezione o modifica va testata/pensata prima per mobile.
5. **Performance**: evita dipendenze pesanti non necessarie. Il progetto deve restare velocissimo (PageSpeed/Core Web Vitals alti) — è un requisito di vendita, non un dettaglio tecnico.
6. **Non aggiungere autenticazione, database o pagamenti** a meno che non venga esplicitamente richiesto: questo è un sito statico/vetrina, non un'app.
7. Prima di aggiungere una nuova dipendenza, verifica se un componente shadcn/ui o Radix esistente può già coprire il caso d'uso.
8. **Convenzioni di routing App Router**: ogni nuova pagina va creata come `app/<nome>/page.tsx`, mai come `app/<nome>.tsx` (quel file non genera una route valida e resta "morto").

## Cosa NON fare mai

- Non eliminare o riscrivere `pnpm-lock.yaml`; se noti `package-lock.json` presente, segnalalo come problema noto invece di aggiornarlo silenziosamente.
- Non introdurre testo placeholder scritto in stile "AI generico" (frasi fatte, tono robotico) nelle sezioni rivolte al cliente finale (chi siamo, descrizioni menu) — scrivi come scriverebbe realmente un ristoratore italiano.
- Non aggiungere tracker/analytics oltre a Vercel Analytics senza che sia richiesto esplicitamente (privacy/GDPR).
- Non scrivere mai nei file `.tsx`/`.ts` reali residui di formattazione markdown (fence \`\`\`typescript, commenti duplicati tipo `// app/x.tsx`) o testo di ragionamento interno (tag tipo `<think>...</think>`): nel file finale deve esserci solo codice valido, niente altro.
- Non toccare `layout.tsx` se non esplicitamente richiesto: è la struttura base del sito, un edit sbagliato lì rompe tutto il layout.

## Nota per agenti AI locali (Qwen3/Ollama e simili con "thinking mode")

Su questo repo si lavora anche con modelli in locale via Ollama. Se il modello usato ha una modalità di ragionamento (thinking) attivabile/disattivabile:

- Nei ruoli di edit/apply sui file, il thinking va **disattivato** (`think: false` lato config del client, es. Continue) — se resta attivo, il blocco di ragionamento può finire dentro il file scritto invece di restarne fuori, corrompendolo.
- Prima di accettare un edit generato da un agente locale su file critici (`layout.tsx`, `page.tsx`, componenti condivisi), controlla sempre il diff (`git diff`) prima di fare accept — non fidarti del solo output visualizzato nell'editor.

## Riferimento

Per il contesto di business più ampio (roadmap, pricing, strategia commerciale di Marco Digital Solutions) questo repo è indipendente e non contiene quei documenti — chi lavora qui non ha bisogno di conoscerli per contribuire al codice.