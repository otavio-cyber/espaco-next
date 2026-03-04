import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
  <Image
    src="/logo-espaco-mais-footer.png"
    alt="Espaço +"
    width={160}
    height={60}
    className="h-20 w-auto mb-6"
  />
  <p className="text-sm text-primary-foreground/80 leading-relaxed">
    Referência em cortinas, persianas e soluções arquitetônicas desde 2001.
  </p>
</div>


          <div>
            <h3 className="font-serif text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/produtos#hunter-douglas"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hunter Douglas
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos#toldos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Toldos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos#automacao"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Automação PowerView
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos#pisos"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pisos e Carpetes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>R. Altíno Arantes, 1355 - Boulevard, Ribeirão Preto - SP, 14025-030</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>(16) 3931-5740</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <span>paulo@espacomais.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Espaço +. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
