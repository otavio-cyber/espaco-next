import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Smartphone, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ProdutosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <img
            src="hero_hunterdouglas.jpg"
            alt="Produtos"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <Image
              src="logo_hunter.png"
              alt="Arquitetônicos HunterDouglas"
              width={600}
              height={200}
              className="mb-6 h-auto mx-auto block"
            />

            <p className="text-xl text-white/90 max-w-2xl mx-auto">Líder em projetos e fabricação de soluções para controle solar, fachadas metálicas, ventiladas e forros
</p>
          </div>
        </section>

        {/* Hunter Douglas */}
        <section id="hunter-douglas" className="py-24">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="mb-12 text-center">
      
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        Nossa tradição em trazer soluções inovadoras ao mercado nos torna uma marca de referência
        para uma ampla gama de produtos arquitetônicos, incluindo revestimentos internos e externos,
        forros e fachadas com soluções de controle solar, vento e luminosidade.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {[
    { nome: "Silhouette®", desc: "Elegância com controle suave de luz", img: "/silhouette-duolite.jpg" },
    { nome: "Pirouette®", desc: "Design revolucionário com lâminas flutuantes", img: "/pirouette.jpg" },
    { nome: "Duette®", desc: "Eficiência energética com design em colmeia", img: "/do.jpg" },
    { nome: "Rolô", desc: "Praticidade e variedade de tecidos", img: "/rollo.jpg" },
    { nome: "Painel", desc: "Solução moderna para grandes áreas", img: "/painel.jpg" },
    { nome: "Romanas", desc: "Sofisticação clássica atemporal", img: "/romana.jpg" },
  ].map((produto) => (
    <Card key={produto.nome} className="p-6 hover:shadow-xl transition-shadow">
      <div className="h-48 bg-secondary mb-4 overflow-hidden">
        <img
          src={produto.img}
          alt={produto.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-2xl mb-2">{produto.nome}</h3>
      <p className="text-muted-foreground text-sm">{produto.desc}</p>
    </Card>
  ))}
</div>


    <Card className="bg-accent/10 border-accent/20 p-8">
      
      <Button asChild variant="outline">
        <a
          href="https://hunterdouglas.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar Site Hunter Douglas
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </Card>
  </div>
</section>


        {/* Toldos */}
        <section id="toldos" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Toldos e Coberturas</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Proteção solar sofisticada para áreas externas, combinando funcionalidade e design
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Toldos retráteis com acionamento manual ou motorizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Toldos verticais para controle de luz e privacidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Coberturas fixas e móveis sob medida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Tecidos de alta durabilidade e proteção UV</span>
                  </li>
                </ul>
                <div className="bg-accent/10 border border-accent/20 p-6 mb-6">
                  <h3 className="font-serif text-xl mb-3">Toldo Green®</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sistema exclusivo Hunter Douglas para máximo conforto térmico
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.hunterdouglas.com.br/produtos/toldo-green/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saiba Mais <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px]">
                <img src="/modern-outdoor-patio-with-retractable-awning-and-s.jpg" alt="Toldos" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Automação */}
        <section id="automacao" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[500px]">
                <img
                  src="/smartphone-controlling-motorized-window-shades-sma.jpg"
                  alt="PowerView Automation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-8 w-8 text-accent" />
                  <h2 className="font-serif text-4xl md:text-5xl">Automação PowerView®</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Tecnologia e conforto no controle das suas cortinas. A automação PowerView® Hunter Douglas permite que
                  você controle suas cortinas e persianas diretamente pelo celular, por comandos de voz ou programações
                  automáticas.
                </p>
                <h3 className="font-serif text-2xl mb-4">Benefícios:</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Integração com Alexa, Google Assistant e Apple HomeKit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Maior vida útil das cortinas com abertura/fechamento suave</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Conforto térmico e luminoso automatizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Segurança - simule presença quando estiver viajando</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>Cenários personalizados para cada momento do dia</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/contato">Solicitar Demonstração</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Encontre a solução perfeita para seu projeto</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para orientar na melhor escolha
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">Fale com um Especialista</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
