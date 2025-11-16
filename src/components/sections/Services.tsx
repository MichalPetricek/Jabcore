import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DeviceMobile, Database, Globe, Layout } from '@phosphor-icons/react'

const services = [
  {
    icon: DeviceMobile,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications built with Swift and Kotlin, or cross-platform solutions using React Native and Flutter. We deliver pixel-perfect mobile experiences with seamless performance, intuitive UI/UX design, and comprehensive app scaling and maintenance support.',
  },
  {
    icon: Database,
    title: 'Corporate & Enterprise Systems',
    description: 'Custom internal systems designed to streamline your operations. From business process automation and third-party integrations to real-time data dashboards and analytics platforms, we build scalable enterprise solutions that grow with your organization.',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern SaaS platforms, admin panels, and customer portals built with cutting-edge technologies. Our web applications are secure, cloud-ready, and optimized for performance. We specialize in creating scalable solutions that handle millions of users.',
  },
  {
    icon: Layout,
    title: 'Websites',
    description: 'Professional company websites, stunning portfolios, and high-converting landing pages. Every site we build is SEO-optimized, fully responsive, and designed to showcase your brand. We focus on speed, accessibility, and user engagement to maximize your online presence.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            What We Build for Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
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
