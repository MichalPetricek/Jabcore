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
    description: 'Just a few simple clicks in our contact form or a quick phone call to get started. Share your project vision, challenges, and goals with us, and we\'ll respond immediately with thoughtful questions and initial insights. There are absolutely no obligations, no pressure, and no commitments at this stage—just a fast, friendly start to exploring exciting possibilities together and determining if we\'re the right fit for your needs.',
    icon: ChatCircleDots,
  },
  {
    number: '02',
    title: 'Discovery Meeting – Understanding Your Vision',
    description: 'We meet online via video call or in person at your location to dive deep into your specific goals, desired features and functionality, target audience characteristics, competitive landscape, and the real business value and measurable outcomes you want to create. We actively help you clarify priorities, identify potential challenges early, suggest strategic technical directions based on our experience, and recommend proven solutions and approaches that actually make sense for your unique objectives and constraints.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Professional Proposal & Solution Design',
    description: 'Based on our comprehensive discovery meeting insights, we create a detailed technical application architecture document, initial UI/UX design mockups and wireframes that visualize your solution, a technology stack recommendation with justification, and a transparent, itemized proposal with clear pricing breakdown and realistic timeline milestones. You\'ll know exactly what you\'re getting, precisely how much it costs with no hidden fees, how the entire project will unfold from start to finish, and what success looks like—completely clear, totally transparent, with absolutely zero unexpected surprises along the way.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Approval & Official Development Kickoff',
    description: 'Once you approve the comprehensive proposal, budget allocation, and timeline commitments, we immediately hit the ground running with full momentum. We prepare a granular development roadmap with specific deliverables, break the entire project into manageable sprint phases with clear goals, set up collaborative project management tools for seamless communication, and give you continuous real-time visibility into what we\'re building, what decisions we\'re making, and why—at every single step of the journey.',
    icon: RocketLaunch,
  },
  {
    number: '05',
    title: 'First Prototype – Collaborative Refinement',
    description: 'In a relatively short timeframe, we deliver your first functional interactive prototype or high-fidelity visual mockup that brings your vision to life. We schedule dedicated review sessions together, carefully examine the details and user flows, gather your valuable feedback and insights, refine subtle interactions and visual elements, adjust features based on new discoveries, and iteratively ensure the final product will precisely match your exact requirements while exceeding your users\' highest expectations for quality and usability.',
    icon: PaintBrush,
  },
  {
    number: '06',
    title: 'Final Delivery – Your Solution Goes Live',
    description: 'You receive a fully polished, production-ready solution that\'s been rigorously tested across devices, browsers, and edge cases, and is completely ready to delight your users. We conduct thorough walkthrough sessions to explain how everything works, provide comprehensive documentation for future reference and maintenance, share expert recommendations for sustainable future growth and feature expansion, and if needed, we professionally set up secure hosting infrastructure, configure ongoing technical support agreements, implement proactive monitoring and alerting systems, and establish seamless third-party integrations to ensure your long-term success and peace of mind.',
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
