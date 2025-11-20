import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Lightning, 
  ShieldCheck, 
  ChartLine, 
  Users, 
  Headset, 
  Trophy,
  BracketsAngle,
  Clock
} from '@phosphor-icons/react'

const reasons = [
  {
    icon: Lightning,
    title: 'Lightning-Fast Delivery',
    description: 'Working prototypes in weeks, not months. Your time-to-market advantage starts here.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description: 'Security built into every line of code. GDPR compliant, OWASP certified, fully protected.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ChartLine,
    title: 'Infinite Scalability',
    description: 'Built to grow from 100 to 100 million users. Cloud-native architecture that scales effortlessly.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BracketsAngle,
    title: 'Clean, Maintainable Code',
    description: 'Code that becomes a valuable asset, not technical debt. Documented, tested, and ready to evolve.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'Beautiful, intuitive interfaces that users love. Every interaction designed for delight.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'We don\'t disappear after launch. Proactive monitoring, rapid fixes, long-term partnership.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: 'Dozens of successful projects from startups to Fortune 500. Apps used by millions daily.',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Clock,
    title: 'Transparent Communication',
    description: 'Daily updates, weekly demos, real-time dashboards. Always know exactly where your project stands.',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Why Choose Jabcore?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with genuine partnership to deliver solutions that don't just meet expectations—they exceed them. 
            Here's what sets us apart from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/30 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <CardContent className="pt-6 relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" weight="duotone" />
                    </div>
                    <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
