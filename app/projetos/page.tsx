"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type Projeto = {
  nome: string
  tipo: "residencial" | "comercial"
  desc: string
  arquiteto?: string
  pasta: string
  prefixo: string
  totalImagens: number
}

export default function ProjetosPage() {
  const [filtro, setFiltro] = useState<"todos" | "residencial" | "comercial">("todos")
  const [modalAberto, setModalAberto] = useState(false)
  const [projetoAtivo, setProjetoAtivo] = useState<Projeto | null>(null)
  const [imagemIndex, setImagemIndex] = useState(1)

  const projetos: Projeto[] = [
    {
      nome: "Obra ACIRP",
      tipo: "comercial",
      desc: "Forro, painel ripado acústico nas colunas, cortinas blackout motorizadas e painel acústico",
      pasta: "/projetos/EM_Obras_ACIRP",
      prefixo: "obras_acirp",
      totalImagens: 5,
    },
    {
      nome: "Casa Residencial",
      tipo: "residencial",
      desc: "Cortina rolô com tela solar manual",
      pasta: "/projetos/EM_Obras_Casa",
      prefixo: "obras_casa1",
      totalImagens: 5,
    },
    {
      nome: "Casa 1",
      tipo: "residencial",
      desc: "Cortinas rolô, tecido, duette e papel de parede",
      arquiteto: "Eng. Bianca Barbieri",
      pasta: "/projetos/EM_Obras_Casa 1",
      prefixo: "obras_casa",
      totalImagens: 7,
    },
    {
      nome: "Consultório Médico",
      tipo: "comercial",
      desc: "Papel de parede, cortinas rolô e rodapé dourado",
      arquiteto: "Arq. Erica Marina",
      pasta: "/projetos/EM_Obras_Consultório",
      prefixo: "obras_consultorio",
      totalImagens: 5,
    },
    {
      nome: "HUB Unaerp",
      tipo: "comercial",
      desc: "Pisos, painéis acústicos, cortinas e forro",
      arquiteto: "Arq. Edson Salerno e Arq. Jéssica Reis",
      pasta: "/projetos/EM_Obras_Hub Unaerp",
      prefixo: "obras_unaerp",
      totalImagens: 9,
    },
    {
      nome: "Apartamento",
      tipo: "residencial",
      desc: "Cortinas rolô motorizadas e em tecido",
      arquiteto: "Arq. Par Projetos",
      pasta: "/projetos/EM_Obras_Apartamento",
      prefixo: "obras_apartamento",
      totalImagens: 6,
    },
  ]

  const projetosFiltrados =
    filtro === "todos" ? projetos : projetos.filter(p => p.tipo === filtro)

  function abrirModal(projeto: Projeto) {
    setProjetoAtivo(projeto)
    setImagemIndex(1)
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
    setProjetoAtivo(null)
  }

  function proximaImagem() {
    if (!projetoAtivo) return
    setImagemIndex(prev =>
      prev < projetoAtivo.totalImagens ? prev + 1 : 1
    )
  }

  function imagemAnterior() {
    if (!projetoAtivo) return
    setImagemIndex(prev =>
      prev > 1 ? prev - 1 : projetoAtivo.totalImagens
    )
  }

  function imagemAtual() {
    if (!projetoAtivo) return ""
    const index = String(imagemIndex).padStart(3, "0")
    return `${projetoAtivo.pasta}/${index}${projetoAtivo.prefixo}.jpg`
  }

  useEffect(() => {
  if (!modalAberto) return

  function handleKey(e: KeyboardEvent) {
    if (e.key === "Escape") fecharModal()
    if (e.key === "ArrowRight") proximaImagem()
    if (e.key === "ArrowLeft") imagemAnterior()
  }

  window.addEventListener("keydown", handleKey)
  return () => window.removeEventListener("keydown", handleKey)
}, [modalAberto])

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src="/cortinas-hero.jpg" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="relative z-20 text-center text-white">
            <h1 className="font-serif text-6xl mb-4">Nossos Projetos</h1>
            <p className="text-xl">Transformando espaços com excelência</p>
          </div>
        </section>

        {/* FILTROS */}
        <section className="py-12 bg-secondary border-b">
          <div className="container mx-auto flex justify-center gap-4">
            <Button variant={filtro === "todos" ? "default" : "outline"} onClick={() => setFiltro("todos")}>
              Todos
            </Button>
            <Button variant={filtro === "residencial" ? "default" : "outline"} onClick={() => setFiltro("residencial")}>
              Residenciais
            </Button>
            <Button variant={filtro === "comercial" ? "default" : "outline"} onClick={() => setFiltro("comercial")}>
              Comerciais
            </Button>
          </div>
        </section>

        {/* GRID */}
        <section className="py-24">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetosFiltrados.map((projeto, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => abrirModal(projeto)}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`${projeto.pasta}/001${projeto.prefixo}.jpg`}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />

                  {/* ÍCONE "INSTAGRAM" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zM17.5 6.5a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-2xl mt-4">{projeto.nome}</h3>
                <p className="text-sm text-muted-foreground">{projeto.desc}</p>
                {projeto.arquiteto && (
                  <p className="text-xs text-accent mt-1">{projeto.arquiteto}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL */}
      {modalAberto && projetoAtivo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button onClick={fecharModal} className="absolute top-6 right-6 text-white text-4xl">
            ×
          </button>

          <button onClick={imagemAnterior} className="absolute left-6 text-white text-5xl">
            ‹
          </button>

          <img
            src={imagemAtual()}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          <button onClick={proximaImagem} className="absolute right-6 text-white text-5xl">
            ›
          </button>
        </div>
      )}

      <Footer />
    </>
  )
}
