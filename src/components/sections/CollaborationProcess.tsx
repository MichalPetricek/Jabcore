import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  ChatCircleDots, 
  Handshake, 
  FileText, 
  RocketLaunch, 
  PaintBrush, 
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'

const steps = [
  {
    number: '01',
    title: 'Nezávazná poptávka',
    description: 'Stačí pár kliknutí ve formuláři nebo krátký telefonát. Získáme od vás základní představu o projektu a okamžitě se vám ozveme zpět. Žádné závazky, jen rychlý start.',
    icon: ChatCircleDots,
  },
  {
    number: '02',
    title: 'Úvodní schůzka – pochopíme váš záměr do detailu',
    description: 'Setkáme se online nebo osobně a společně projdeme vaše cíle, představu o funkcích i to, co má aplikace nebo systém ve finále přinést. Pomůžeme vám ujasnit priority, navrhneme vhodný směr a doporučíme řešení, která dávají smysl.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Připravíme profesionální návrh řešení',
    description: 'Na základě schůzky vytvoříme návrh architektury aplikace/systému, úvodní design UI/UX a cenovou nabídku s časovým harmonogramem. Díky tomu přesně víte, co dostanete, kolik to bude stát a jak bude projekt probíhat. Jasně, transparentně a bez skrytých překvapení.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Potvrzení a oficiální start vývoje',
    description: 'Jakmile odsouhlasíte návrh i rozpočet, pouštíme se do práce. Připravíme detailní plán vývoje, rozdělíme projekt do fází a vy tak máte neustálý přehled o tom, co právě vzniká.',
    icon: RocketLaunch,
  },
  {
    number: '05',
    title: 'První nástřel – společně ladíme dokonalý výsledek',
    description: 'V relativně krátkém čase vám ukážeme první funkční či vizuální prototyp. Ten společně projdeme, doplníme detaily, upravíme funkce a vy tak máte jistotu, že výsledek bude přesně odpovídat vašim požadavkům i očekáváním uživatelů.',
    icon: PaintBrush,
  },
  {
    number: '06',
    title: 'Předání první finální verze aplikace nebo systému',
    description: 'Získáte hotové řešení připravené k použití. Vše vám ukážeme, vysvětlíme a doplníme doporučení pro další rozvoj. Pokud je třeba, nastavíme hosting, podporu, monitorování nebo integrace.',
    icon: CheckCircle,
  },
]

export default function CollaborationProcess() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Jak probíhá spolupráce?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Od první poptávky až po finální předání a dlouhodobou podporu. 
            Transparentní proces, ve kterém máte neustálý přehled a kontrolu.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-2">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" weight="regular" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-5xl font-bold text-primary/20" style={{ fontFamily: 'var(--font-display)' }}>
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-semibold flex-1 pt-2" style={{ fontFamily: 'var(--font-display)' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ArrowRight className="w-6 h-6 text-accent" weight="bold" />
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                A co dál? Projekt nekončí první verzí.
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Vývoj aplikací je živý proces. Po nasazení začínají uživatelé řešení používat, 
              přicházejí nové nápady, další funkce, optimalizace a zlepšení.
            </p>
            <p className="text-lg font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
              Proto s vámi počítáme dlouhodobě — nabízíme pokračující podporu, rozšiřování 
              i strategický rozvoj. Vaše aplikace se tak může neustále posouvat dopředu 
              a růst spolu s vaším podnikáním.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
