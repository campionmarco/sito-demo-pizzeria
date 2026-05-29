"use client"

import { useState, FormEvent } from "react"
import { CheckCircle } from "lucide-react"

export function ReservationSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    data: "",
    ora: "",
    persone: "",
    note: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Il nome è obbligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Inserisci un'email valida"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "Il telefono è obbligatorio"
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = "Inserisci un numero valido"
    }

    if (!formData.data) {
      newErrors.data = "La data è obbligatoria"
    }

    if (!formData.ora) {
      newErrors.ora = "L'ora è obbligatoria"
    }

    if (!formData.persone) {
      newErrors.persone = "Seleziona il numero di persone"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Get tomorrow's date as minimum date
  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  if (isSubmitted) {
    return (
      <section id="prenota" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-[#e8b84b]/20">
            <CheckCircle className="w-20 h-20 text-[#e8b84b] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#fafaf8] mb-4">
              Prenotazione Confermata!
            </h2>
            <p className="text-[#fafaf8]/80 text-lg mb-2">
              Grazie {formData.nome}!
            </p>
            <p className="text-[#fafaf8]/80 mb-6">
              Ti aspettiamo il <span className="text-[#e8b84b] font-semibold">{formData.data}</span> alle{" "}
              <span className="text-[#e8b84b] font-semibold">{formData.ora}</span> per{" "}
              <span className="text-[#e8b84b] font-semibold">{formData.persone}</span> {parseInt(formData.persone) === 1 ? "persona" : "persone"}.
            </p>
            <p className="text-[#fafaf8]/60 text-sm">
              Riceverai una conferma via email a {formData.email}
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  nome: "",
                  email: "",
                  telefono: "",
                  data: "",
                  ora: "",
                  persone: "",
                  note: "",
                })
              }}
              className="mt-8 text-[#e8b84b] hover:underline"
            >
              Effettua un&apos;altra prenotazione
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="prenota" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#fafaf8] mb-4">
            Prenota un Tavolo
          </h2>
          <p className="text-[#fafaf8]/70 text-lg">
            Riserva il tuo posto per un&apos;esperienza gastronomica indimenticabile
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#2a2a2a] rounded-2xl p-6 md:p-10 border border-[#e8b84b]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-[#fafaf8] mb-2 font-medium">
                Nome e Cognome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.nome ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8] placeholder-[#666]`}
                placeholder="Mario Rossi"
              />
              {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#fafaf8] mb-2 font-medium">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.email ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8] placeholder-[#666]`}
                placeholder="mario@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-[#fafaf8] mb-2 font-medium">
                Telefono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.telefono ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8] placeholder-[#666]`}
                placeholder="+39 333 1234567"
              />
              {errors.telefono && <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>}
            </div>

            {/* Data */}
            <div>
              <label htmlFor="data" className="block text-[#fafaf8] mb-2 font-medium">
                Data *
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
                min={getMinDate()}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.data ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8]`}
              />
              {errors.data && <p className="text-red-400 text-sm mt-1">{errors.data}</p>}
            </div>

            {/* Ora */}
            <div>
              <label htmlFor="ora" className="block text-[#fafaf8] mb-2 font-medium">
                Ora *
              </label>
              <select
                id="ora"
                name="ora"
                value={formData.ora}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.ora ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8]`}
              >
                <option value="">Seleziona un orario</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
              </select>
              {errors.ora && <p className="text-red-400 text-sm mt-1">{errors.ora}</p>}
            </div>

            {/* Persone */}
            <div>
              <label htmlFor="persone" className="block text-[#fafaf8] mb-2 font-medium">
                Numero di Persone *
              </label>
              <select
                id="persone"
                name="persone"
                value={formData.persone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                  errors.persone ? "border-red-500" : "border-[#444]"
                } text-[#fafaf8]`}
              >
                <option value="">Seleziona</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "persona" : "persone"}
                  </option>
                ))}
                <option value="10+">10+ persone</option>
              </select>
              {errors.persone && <p className="text-red-400 text-sm mt-1">{errors.persone}</p>}
            </div>
          </div>

          {/* Note */}
          <div className="mt-6">
            <label htmlFor="note" className="block text-[#fafaf8] mb-2 font-medium">
              Note Speciali
            </label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#444] text-[#fafaf8] placeholder-[#666] resize-none"
              placeholder="Allergie, preferenze particolari, occasioni speciali..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-gold w-full mt-8 bg-[#e8b84b] text-[#1a1a1a] py-4 rounded-lg font-semibold text-lg hover:bg-[#d4a43f]"
          >
            Conferma Prenotazione
          </button>
        </form>
      </div>
    </section>
  )
}
