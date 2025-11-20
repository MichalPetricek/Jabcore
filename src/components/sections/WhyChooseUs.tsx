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
    description: 'We pride ourselves on exceptionally fast turnaround times without compromising quality. Using agile methodologies, efficient development workflows, and proven frameworks, we deliver working prototypes in weeks, not months. Your time-to-market advantage can make the critical difference between leading your industry and playing catch-up with competitors.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description: 'Security is not an afterthought—it\'s built into every line of code from day one. We implement industry-leading encryption protocols, conduct regular security audits and penetration testing, follow OWASP best practices religiously, ensure GDPR and compliance standards are met, and protect your sensitive data with multi-layered defense strategies that keep you and your users safe from evolving threats.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ChartLine,
    title: 'Infinite Scalability',
    description: 'Your application is built to grow with your ambitions. Our architecture handles traffic spikes gracefully, scales horizontally across distributed systems, optimizes database queries for millions of records, implements intelligent caching strategies, and leverages cloud-native technologies like Kubernetes and serverless computing. Whether you have 100 users or 100 million, your app performs flawlessly under any load.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BracketsAngle,
    title: 'Clean, Maintainable Code',
    description: 'We write code that other developers will thank you for. Every project follows strict coding standards, comprehensive documentation, thorough unit and integration testing, meaningful variable naming and modular architecture. Your codebase won\'t become technical debt—it\'s a valuable asset that\'s easy to understand, simple to modify, and ready for your team to confidently extend and evolve for years to come.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'Beautiful interfaces that users genuinely love to interact with. We conduct extensive user research and usability testing, create intuitive navigation flows that feel natural, design for accessibility so everyone can use your product, optimize every micro-interaction for delight, and craft experiences that turn casual users into passionate advocates who can\'t wait to share your product with others.',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'We don\'t disappear after launch—we\'re your long-term technology partner. Get rapid response times to critical issues, proactive monitoring that catches problems before users notice them, regular performance optimization reviews, strategic feature planning sessions, priority bug fixes and security patches, and a dedicated account manager who knows your business inside and out and is genuinely invested in your continued success.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: 'Our portfolio speaks volumes—dozens of successful projects across diverse industries, from nimble startups to Fortune 500 enterprises. We\'ve launched apps used by millions of active users daily, built platforms processing billions in transaction volume, and created systems managing petabytes of data. Our clients consistently achieve their business objectives, exceed growth targets, and return to us for their next ambitious project.',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Clock,
    title: 'Transparent Communication',
    description: 'You\'ll always know exactly what\'s happening with your project. We provide daily progress updates via your preferred communication channels, weekly sprint reviews with live demonstrations of new features, real-time access to project management dashboards showing every task and milestone, honest assessments about challenges and solutions, and clear explanations of technical decisions in language that makes sense—no confusing jargon or mysterious black boxes.',
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
