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
                 <h2 className="font-serif text-4xl md:text-5xl mb-6">ESPAÇO +</h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto"><p className="text-xl text-white/90 max-w-2xl mx-auto">Marcas cuidadosamente selecionadas se unem aqui para criar os mais altos padrões em controle solar, revestimentos e design.
                  </p></p>      
                  
                </div>
              </section>

        

        

        <section id="pisos" className="py-24 bg-secondary">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">Produtos - Soluções Completas</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Toldos, Coberturas, Persianas, Pisos, Carpetes e Papéis de Parede
      </p>
    </div>

    {/* novos cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/cortinas.jpg" // ajuste o nome do arquivo aqui
            alt="Cortinas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Cortinas</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Controle de luz e privacidade [web:33]</li>
            <li>• Conforto térmico para os ambientes [web:33]</li>
            <li>• Tecidos tecnológicos e sofisticados [web:28]</li>
            <li>• Opções sob medida para cada projeto [web:34]</li>
          </ul>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/persianas.jpg" // ajuste o nome do arquivo aqui
            alt="Persianas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Persianas</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Eficiência no controle de luminosidade [web:33]</li>
            <li>• Auxílio no conforto térmico e economia de energia [web:35]</li>
            <li>• Modelos para residências e corporativo [web:33]</li>
            <li>• Design versátil para diferentes estilos de decoração [web:34]</li>
          </ul>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/toldos.jpg" // ajuste o nome do arquivo aqui
            alt="Toldos e Coberturas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Toldos e Coberturas</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Proteção contra sol e chuva em áreas externas [web:26]</li>
            <li>• Redução de calor e maior conforto ao ar livre [web:26]</li>
            <li>• Materiais de alta resistência e durabilidade [web:27]</li>
            <li>• Valorização da fachada e do projeto arquitetônico [web:29]</li>
          </ul>
        </div>
      </Card>
    </div>

    {/* cards já existentes */}
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/pisovinilico.jpg"
            alt="Pisos Vinílicos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Pisos Vinílicos</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Interfloor</li>
            <li>• Tarkett</li>
            <li>• Belgotex</li>
            <li>• Alta durabilidade</li>
            <li>• Fácil manutenção</li>
          </ul>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/carpete.jpg"
            alt="Carpetes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Carpetes</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Modelos residenciais</li>
            <li>• Modelos corporativos</li>
            <li>• Carpetes em placas</li>
            <li>• Carpetes em rolos</li>
            <li>• Variedade de cores</li>
          </ul>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="h-64 relative">
          <img
            src="/papeldeparede.jpg"
            alt="Papéis de Parede"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-3">Papéis de Parede</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Catálogos nacionais</li>
            <li>• Catálogos importados</li>
            <li>• Texturas exclusivas</li>
            <li>• Instalação especializada</li>
            <li>• Consultoria de design</li>
          </ul>
        </div>
      </Card>
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
