# Sito Demo Pizzeria

Sito demo one-page per una pizzeria/ristorante fittizio ("Pizzeria Da Marco", Rovigo), realizzato con Next.js e Tailwind CSS. Fa parte del portfolio di **Marco Digital Solutions** — usato come dimostrazione da mostrare ai potenziali clienti (ristoranti/pizzerie locali).

## Stack tecnico

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui** + **Radix UI** (componenti in `components/ui`)
- **TypeScript**
- **Vercel Analytics**
- Package manager: **pnpm** (presente `pnpm-lock.yaml`; c'è anche un `package-lock.json`, vedi sezione Problemi noti)

## Struttura del progetto

```
app/
  layout.tsx        # Layout root, font, metadata
  page.tsx           # Homepage — assembla tutte le sezioni in ordine
  globals.css        # Stili globali Tailwind
components/
  navbar.tsx
  hero.tsx
  menu-section.tsx        # Menu a tab (antipasti/pizze/dolci/bevande), dati hardcoded
  reservation-section.tsx  # Form prenotazione — SOLO client-side, nessun invio reale (vedi sotto)
  about-section.tsx
  gallery-section.tsx
  reviews-section.tsx
  contact-section.tsx      # Indirizzo/telefono/email fittizi + iframe Google Maps embed
  footer.tsx
  theme-provider.tsx
  ui/                # Componenti shadcn/ui (Radix-based)
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  utils.ts
public/               # Icone e placeholder immagini
```

## Setup locale

```bash
pnpm install
pnpm dev
```

Apri [http://localhost:3000](http://localhost:3000).

Script disponibili:
- `pnpm dev` — sviluppo locale
- `pnpm build` — build di produzione
- `pnpm start` — avvia la build di produzione
- `pnpm lint` — ESLint

## Deploy

Pensato per il deploy su **Vercel** (zero-config, coerente con lo stack MDS). In alternativa Netlify.

## ⚠️ Cosa è demo e cosa NON è funzionante

Questo è un sito **dimostrativo**, non pronto per un cliente reale così com'è:

- **Form prenotazione** (`reservation-section.tsx`): valida i campi lato client ma **non invia nulla da nessuna parte** — nessuna email, nessun webhook, nessun backend. Va collegato a un servizio reale (es. Make.com → email, oppure una Route Handler Next.js + servizio email) prima di consegnarlo a un cliente pagante.
- **Dati di contatto** (`contact-section.tsx`): indirizzo ("Via Roma 123"), telefono (+39 0425 123456) ed email (info@pizzeriadamarco.it) sono **fittizi**, così come le coordinate dell'iframe Google Maps (centrate genericamente su Rovigo, non un locale reale).
- **Menu** (`menu-section.tsx`): piatti e prezzi sono di fantasia, hardcoded in un array — da sostituire con i dati reali del cliente.
- **Recensioni** (`reviews-section.tsx`): verificare se sono placeholder prima di riusarle con un cliente vero.
- **Immagini**: in `public/` ci sono solo placeholder generici — vanno sostituite con foto reali del locale.

## Problemi noti / da sistemare

- Doppio lockfile (`package-lock.json` e `pnpm-lock.yaml`): scegliere un solo package manager ed eliminare l'altro lockfile per evitare inconsistenze.
- Nessun file `.env.example` — se in futuro si aggiunge l'invio email/backend per le prenotazioni, documentare qui le variabili d'ambiente necessarie.

## Note per il riuso su un cliente reale

Prima di proporre questo template a un ristorante/pizzeria reale:
1. Sostituire menu, contatti, indirizzo, orari e mappa con i dati reali.
2. Collegare il form prenotazioni a un flusso reale (email o Make.com).
3. Sostituire le immagini placeholder con foto vere del locale (mai immagini finte spacciate per vere, per regola interna MDS).
4. Aggiungere favicon personalizzata (es. con Delphi.tools).
5. Verificare Core Web Vitals con PageSpeed Insights prima della consegna.