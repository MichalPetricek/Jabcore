import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DeviceMobile, Database, Globe, Layout, CheckCircle, Sparkle } from '@phosphor-icons/react'

const services = [
  {
    icon: DeviceMobile,
    title: 'Mobile App Development',
    description: 'Transform your ideas into powerful native mobile applications that users love. We build high-performance iOS and Android apps with intuitive interfaces and seamless user experiences.',
    features: [
      'Native iOS development (Swift, SwiftUI)',
      'Native Android development (Kotlin, Jetpack Compose)',
      'Cross-platform solutions (React Native, Flutter)',
      'Mobile UI/UX design and prototyping',
      'App Store optimization and deployment',
      'Push notifications and real-time features',
      'Offline-first architecture',
      'In-app purchases and monetization',
    ],
    highlights: ['Fast Performance', 'Native Feel', 'Scalable Architecture'],
  },
  {
    icon: Database,
    title: 'Corporate & Enterprise Systems',
    description: 'Streamline your business operations with custom-built enterprise solutions. We create powerful systems that automate workflows, integrate with existing tools, and leverage AI to boost productivity.',
    features: [
      'Custom CRM and ERP systems',
      'Business process automation',
      'AI-powered analytics and insights',
      'Workflow management systems',
      'Document management solutions',
      'Integration with existing infrastructure',
      'Role-based access control',
      'Real-time reporting and dashboards',
    ],
    highlights: ['AI-Powered', 'Fully Integrated', 'Secure & Compliant'],
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Build scalable, secure, and lightning-fast web applications that grow with your business. From SaaS platforms to complex portals, we deliver modern web solutions built on cutting-edge technologies.',
    features: [
      'Progressive Web Apps (PWA)',
      'SaaS platform development',
      'Customer and admin portals',
      'Real-time collaboration tools',
      'API development and integration',
      'Cloud infrastructure setup',
      'Database design and optimization',
      'Security and performance monitoring',
    ],
    highlights: ['Cloud-Native', 'Highly Scalable', 'Enterprise-Grade'],
  },
  {
    icon: Layout,
    title: 'Modern Websites',
    description: 'Create a stunning online presence that converts visitors into customers. We design and develop SEO-optimized, fast-loading websites that showcase your brand and drive business growth.',
    features: [
      'Custom website design and development',
      'SEO optimization and strategy',
      'Performance optimization (Core Web Vitals)',
      'Mobile-responsive design',
      'Content management systems (CMS)',
      'E-commerce solutions',
      'Analytics and conversion tracking',
      'Ongoing maintenance and support',
    ],
    highlights: ['SEO-Optimized', 'High Converting', 'Lightning Fast'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end software development services designed to transform your business and deliver exceptional results
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <div className={`grid lg:grid-cols-2 gap-8 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    <CardHeader className={`lg:p-12 ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-9 h-9 text-primary" weight="duotone" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            {service.highlights.map((highlight) => (
                              <Badge key={highlight} variant="secondary" className="text-xs">
                                <Sparkle className="w-3 h-3 mr-1" weight="fill" />
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className={`lg:p-12 pt-0 lg:pt-12 bg-secondary/20 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" weight="fill" />
                        What's Included
                      </h3>
                      <ul className="grid gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" weight="duotone" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
