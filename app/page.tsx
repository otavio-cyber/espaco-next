import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10" />
          <img src="/elegant-modern-living-room-with-floor-to-ceiling-c.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">
              Transforme seus espaços com sofisticação
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Cortinas, persianas e soluções arquitetônicas Hunter Douglas que unem estética, tecnologia e qualidade
              desde 2001
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                <Link href="/contato">
                  Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/projetos">Ver Projetos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Desde 2001</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                  Mais de duas décadas criando ambientes excepcionais
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Fundada por Paulo e Márcia Schwartzmann, a Espaço + consolidou-se em Ribeirão Preto como referência em
                  cortinas, persianas, toldos e produtos especiais Hunter Douglas.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Qualidade em cada detalhe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Atendimento consultivo personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">Instalação especializada própria</span>
                  </div>
                </div>
                <Button asChild size="lg" variant="outline">
                  <Link href="/quem-somos">
                    Conheça Nossa História <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[500px] md:h-[600px]">
                <img
                  src="/elegant-window-treatments-showroom-with-curtains-a.jpg"
                  alt="Showroom"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Nossos Produtos</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                Soluções completas para cada ambiente
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#hunter-douglas" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/hunter-douglas-silhouette-window-shades-in-modern-.jpg"
                      alt="Hunter Douglas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">Hunter Douglas</h3>
                      <p className="text-white/90 text-sm">Silhouette, Pirouette, Duette e mais</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#toldos" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/modern-retractable-awning-outdoor-patio.jpg"
                      alt="Toldos"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">Toldos & Coberturas</h3>
                      <p className="text-white/90 text-sm">Soluções externas sob medida</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#automacao" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/smart-home-automation-smartphone-controlling-motor.jpg"
                      alt="Automação"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Sparkles className="h-6 w-6 mb-2 text-accent" />
                      <h3 className="font-serif text-2xl mb-2">PowerView® Automation</h3>
                      <p className="text-white/90 text-sm">Controle inteligente pelo celular</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#pisos" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/luxury-vinyl-flooring-modern-interior.jpg"
                      alt="Pisos"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">Pisos Vinílicos</h3>
                      <p className="text-white/90 text-sm">Interfloor, Tarkett, Belgotex</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#carpetes" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/modern-carpet-flooring-office-interior.jpg"
                      alt="Carpetes"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">Carpetes</h3>
                      <p className="text-white/90 text-sm">Residenciais e corporativos</p>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href="/produtos#papeis" className="block">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src="/elegant-wallpaper-modern-interior-design.jpg"
                      alt="Papéis de Parede"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">Papéis de Parede</h3>
                      <p className="text-white/90 text-sm">Catálogos exclusivos</p>
                    </div>
                  </div>
                </Link>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/produtos">
                  Ver Todos os Produtos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">Portfólio</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Projetos que inspiram</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative h-96 overflow-hidden">
                <img
                  src="/modern-office-with-motorized-roller-shades-acousti.jpg"
                  alt="Projeto ACIRP"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-3xl mb-2">ACIRP</h3>
                  <p className="text-white/90 text-sm mb-4">Cortinas blackout motorizadas, painéis acústicos e forro</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    <Link href="/projetos">Ver Projeto</Link>
                  </Button>
                </div>
              </div>

              <div className="group relative h-96 overflow-hidden">
                <img
                  src="/modern-university-hub-with-colorful-vinyl-flooring.jpg"
                  alt="Projeto HUB Unaerp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-3xl mb-2">HUB Unaerp</h3>
                  <p className="text-white/90 text-sm mb-4">Piso vinílico, carpete, painéis acústicos e cortinas</p>
                  <div className="text-xs text-white/70 mb-4">Arq. Edson Salerno e Arq. Jéssica Reis</div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    <Link href="/projetos">Ver Projeto</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/projetos">
                  Ver Todos os Projetos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe está pronta para criar uma solução personalizada para o seu projeto
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contato">
                Solicitar Orçamento Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
