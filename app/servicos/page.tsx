import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Ruler, Wrench, Smartphone, Building2, Headphones, ArrowRight } from "lucide-react"

export default function ServicosPage() {
  const servicos = [
    {
      icon: Ruler,
      titulo: "Consultoria técnica",
      desc: "Orientação especializada para escolha dos produtos ideais para cada ambiente e necessidade",
    },
    {
      icon: Ruler,
      titulo: "Medição profissional",
      desc: "Medição precisa no local para garantir o perfeito encaixe e funcionamento",
    },
    {
      icon: Wrench,
      titulo: "Instalação especializada",
      desc: "Equipe própria treinada para instalação impecável de todos os produtos",
    },
    {
      icon: Smartphone,
      titulo: "Automação PowerView®",
      desc: "Configuração e integração de sistemas de automação para controle inteligente",
    },
    {
      icon: Building2,
      titulo: "Projetos corporativos",
      desc: "Atendimento especializado para escritórios, consultórios e estabelecimentos comerciais",
    },
    {
      icon: Headphones,
      titulo: "Suporte pós-instalação",
      desc: "Assistência contínua para manutenção e ajustes necessários",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <img
            src="/services.png"
            alt="Serviços"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">Nossos Serviços</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Atendimento completo do início ao fim do seu projeto
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicos.map((servico, index) => {
                const Icon = servico.icon
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{servico.titulo}</h3>
                    <p className="text-muted-foreground leading-relaxed">{servico.desc}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Como funciona</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso processo completo garante a excelência em cada etapa
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { numero: "01", titulo: "Contato", desc: "Entre em contato para agendar uma visita" },
                { numero: "02", titulo: "Consultoria", desc: "Visitamos o local e apresentamos as melhores soluções" },
                { numero: "03", titulo: "Orçamento", desc: "Elaboramos um orçamento detalhado e personalizado" },
                { numero: "04", titulo: "Instalação", desc: "Nossa equipe realiza a instalação com perfeição" },
              ].map((etapa) => (
                <div key={etapa.numero} className="text-center">
                  <div className="font-serif text-6xl text-accent/20 mb-4">{etapa.numero}</div>
                  <h3 className="font-serif text-xl mb-3">{etapa.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{etapa.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <img src="/placeholder.svg?height=800&width=600" alt="Equipe" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Por que escolher a Espaço +?</h2>
                <ul className="space-y-6">
                  <li>
                    <h3 className="font-serif text-xl mb-2">Experiência comprovada</h3>
                    <p className="text-muted-foreground">
                      Mais de 20 anos no mercado entregando projetos de excelência
                    </p>
                  </li>
                  <li>
                    <h3 className="font-serif text-xl mb-2">Equipe especializada</h3>
                    <p className="text-muted-foreground">
                      Profissionais treinados e certificados pelas melhores marcas
                    </p>
                  </li>
                  <li>
                    <h3 className="font-serif text-xl mb-2">Produtos premium</h3>
                    <p className="text-muted-foreground">Parceria com as marcas mais renomadas do mercado</p>
                  </li>
                  <li>
                    <h3 className="font-serif text-xl mb-2">Atendimento personalizado</h3>
                    <p className="text-muted-foreground">Acompanhamento em todas as etapas do seu projeto</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Vamos começar seu projeto?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba um atendimento personalizado
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">
                Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
