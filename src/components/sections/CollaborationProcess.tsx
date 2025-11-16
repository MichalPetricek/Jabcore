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
    description: 'Just a few clicks in our contact form or a quick phone call. Share your project vision with us and we\'ll respond immediately. No obligations, just a fast start to exploring possibilities together.',
    icon: ChatCircleDots,
  },
  {
    number: '02',
    title: 'Discovery Meeting – Understanding Your Vision',
    description: 'We meet online or in person to dive deep into your goals, desired features, and the real business value you want to create. We help you clarify priorities, suggest strategic directions, and recommend solutions that actually make sense for your objectives.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Professional Proposal & Solution Design',
    description: 'Based on our meeting, we create a detailed application architecture, initial UI/UX design mockups, and a transparent proposal with pricing and timeline. You\'ll know exactly what you\'re getting, how much it costs, and how the project will unfold—clear, transparent, with zero hidden surprises.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Approval & Official Development Kickoff',
    description: 'Once you approve the proposal and budget, we hit the ground running. We prepare a detailed development roadmap, break the project into manageable phases, and give you continuous visibility into what we\'re building at every step.',
    icon: RocketLaunch,
  },
  {
    number: '05',
    title: 'First Prototype – Collaborative Refinement',
    description: 'In a relatively short time, we deliver your first functional or visual prototype. We review it together, refine the details, adjust features, and ensure the final product will precisely match your requirements and exceed your users\' expectations.',
    icon: PaintBrush,
  },
  {
    number: '06',
    title: 'Final Delivery – Your Solution Goes Live',
    description: 'You receive a production-ready solution, fully tested and ready to use. We walk you through everything, explain how it works, and provide recommendations for future growth. If needed, we set up hosting, ongoing support, monitoring, and integrations to ensure long-term success.',
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
