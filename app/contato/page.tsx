"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData)
    alert("Obrigado! Entraremos em contato em breve.")
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <img
            src="/projetos/EM_Obras_Hub Unaerp/002obras_unaerp.jpg?height=800&width=1920"
            alt="Contato"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">Entre em Contato</h1>
          </div>
        </section>

        {/* Formulário e Informações */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Solicitar Orçamento</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Preencha o formulário abaixo e nossa equipe entrará em contato para agendar uma visita e elaborar um
                  orçamento personalizado
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <Input
                        id="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium mb-2">
                      Cidade
                    </label>
                    <Input
                      id="cidade"
                      type="text"
                      required
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      placeholder="Sua cidade"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte-nos sobre seu projeto..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </div>

              {/* Informações */}
              <div>
                <Card className="p-8 mb-8">
                  <h3 className="font-serif text-2xl mb-6">Informações de Contato</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Endereço</h4>
                        <p className="text-sm text-muted-foreground">
                          R. Altíno Arantes, 1355 - Boulevard, 
                          <br />
                          Ribeirão Preto - SP, 14025-030
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Telefone</h4>
                        <p className="text-sm text-muted-foreground">(16) 39315740</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">E-mail</h4>
                        <p className="text-sm text-muted-foreground">paulo@espacomais.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta: 9h às 18h
                          <br />
                          Sábado e Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-accent/10 border-accent/20">
                  <h3 className="font-serif text-2xl mb-4">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Prefere conversar pelo WhatsApp? Clique no botão abaixo para iniciar uma conversa
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://wa.me/551639315740" target="_blank" rel="noopener noreferrer">
                      Abrir WhatsApp
                    </a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

       {/* Mapa */}
<section className="w-full h-[400px] bg-secondary">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1860.028604641393!2d-47.8091566!3d-21.1898862!3m2!1i1024!2i768!4f13.1!2m1!1sR%20Alt%C3%ADno%20Arantes%201355%20Boulevard%20Ribeir%C3%A3o%20Preto%20SP%2014025-030!5e0!3m2!1spt-BR!2sbr!4v1766222620713!5m2!1spt-BR!2sbr"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</section>

      </main>
      <Footer />
    </>
  )
}
