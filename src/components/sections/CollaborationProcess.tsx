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
    title: 'Initial Inquiry – No Commitment Required',
    description: 'Share your project vision through our contact form or a quick call. We\'ll respond with thoughtful questions and insights—no obligations, no pressure, just exploring possibilities and determining fit.',
    icon: ChatCircleDots,
  },
  {
    number: '02',
    title: 'Discovery Meeting – Understanding Your Vision',
    description: 'We meet online or in person to dive deep into your goals, target audience, and desired outcomes. Together, we clarify priorities, identify challenges, and recommend strategic solutions tailored to your needs.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Professional Proposal & Solution Design',
    description: 'You receive a detailed technical architecture, UI/UX mockups, technology stack recommendation, and transparent proposal with clear pricing and timeline. Everything is clear with zero surprises.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Approval & Official Development Kickoff',
    description: 'Once approved, we hit the ground running with a development roadmap, sprint phases, and project management tools. You get real-time visibility into what we\'re building and why—at every step.',
    icon: RocketLaunch,
  },
  {
    number: '05',
    title: 'First Prototype – Collaborative Refinement',
    description: 'We deliver a functional prototype that brings your vision to life. Through review sessions and feedback, we refine interactions and features to ensure the final product exceeds expectations.',
    icon: PaintBrush,
  },
  {
    number: '06',
    title: 'Final Delivery – Your Solution Goes Live',
    description: 'You receive a production-ready solution tested across devices and browsers. We provide walkthrough sessions, documentation, and if needed, set up hosting, support agreements, and integrations for long-term success.',
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
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial inquiry to final delivery and long-term support—a transparent process 
            where you maintain complete visibility and control at every stage.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mt-4 italic">
            The exact process may vary depending on your specific project requirements and scope.
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
                What Happens After Launch?
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Application development is a living process. After deployment, users start engaging with your solution, 
              new ideas emerge, features evolve, and optimizations unlock new opportunities for growth and innovation.
            </p>
            <p className="text-lg font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
              That's why we're here for the long haul—offering continuous support, strategic feature expansion, 
              and ongoing enhancement. Your application can constantly evolve and scale alongside your business, 
              adapting to new challenges and opportunities as they arise.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
