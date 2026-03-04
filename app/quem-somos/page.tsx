import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Shield } from "lucide-react"

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <img
            src="/elegant-interior-design-showroom-with-window-treat.jpg"
            alt="Quem Somos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
              Nossa história, nossa essência
            </h1>
          </div>
        </section>

        {/* História */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                Fundada em <strong className="text-foreground">2001</strong> por{" "}
                <strong className="text-foreground"> Paulo e Márcia Schwartzmann</strong>, a Espaço + nasceu do desejo
                de unir <strong className="text-accent">estética, tecnologia e qualidade</strong>.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                Desde então, consolidou-se em <strong className="text-foreground">Ribeirão Preto</strong> como
                referência em cortinas, persianas, toldos e produtos especiais Hunter Douglas, além de oferecer uma
                linha completa de soluções decorativas como pisos vinílicos, carpetes, papéis de parede, rodapés e
                revestimentos.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Com uma equipe experiente, atendimento personalizado e foco em excelência, a Espaço + entrega projetos
                residenciais e corporativos com <strong className="text-foreground">precisão e sofisticação</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Nossos diferenciais</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">Qualidade em cada detalhe</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Produtos premium e acabamento impecável em todos os projetos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">Atendimento consultivo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Equipe especializada para orientar na melhor escolha
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">Soluções completas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Do projeto à instalação, tudo em um só lugar
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl mb-3">Instalação própria</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Equipe especializada garantindo perfeição
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Parcerias com as melhores marcas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Trabalhamos com fornecedores renomados para garantir a qualidade e durabilidade dos nossos produtos
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {[
                "Hunter Douglas",
                "Interfloor",
                "Tarkett",
                "Belgotex",
                "Quick Step",
                "Durafloor",
                "Eucafloor",
                "Stobag",
                "Saint Gobain",
                "Bess",
                "Rampasso",
                "WillerK",
                "Bucalo",
              ].map((marca) => (
                <div
                  key={marca}
                  className="bg-secondary h-32 flex items-center justify-center p-6 hover:bg-accent/10 transition-colors"
                >
                  <span className="font-serif text-lg text-center">{marca}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Vamos criar algo especial juntos?</h2>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">
                Entre em Contato <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
