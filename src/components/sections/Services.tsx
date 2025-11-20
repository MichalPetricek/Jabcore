import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DeviceMobile, Database, Globe, Layout } from '@phosphor-icons/react'

const services = [
  {
    icon: DeviceMobile,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications built with Swift and Kotlin for maximum performance and platform-specific features, or cross-platform solutions using React Native and Flutter for efficient multi-platform deployment. We deliver pixel-perfect mobile experiences with seamless animations, intuitive gesture controls, and responsive interfaces that feel natural on every device. Our development process includes comprehensive performance optimization, thorough testing across devices and OS versions, intuitive UI/UX design following platform guidelines, offline-first architecture for reliable functionality, push notifications and real-time updates, secure data handling and encryption, and comprehensive scaling and ongoing maintenance support that keeps your app competitive, secure, and aligned with the latest platform updates and user expectations.',
  },
  {
    icon: Database,
    title: 'Corporate & Enterprise Systems',
    description: 'Custom internal systems meticulously designed to streamline your complex operations, eliminate inefficiencies, and multiply team productivity across your entire organization. From intelligent business process automation that handles repetitive tasks and seamless third-party integrations connecting your essential tools, to real-time data dashboards providing actionable insights at a glance and predictive analytics platforms that forecast trends and opportunities. We integrate powerful AI capabilities throughout your workflows to automate complex decision-making processes, enhance analytical capabilities with machine learning models, eliminate manual data entry and processing bottlenecks, unlock valuable insights hidden deep within your data, and transform how your organization operates, collaborates, and serves customers with unprecedented efficiency and intelligence.',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Modern SaaS platforms, comprehensive admin panels, and customer portals built with cutting-edge technologies that deliver exceptional user experiences and robust functionality. Our web applications are architected with security-first principles including encryption, authentication, and authorization, cloud-ready deployment strategies that leverage auto-scaling and load balancing, and meticulously optimized for peak performance with lazy loading, code splitting, and caching strategies. We specialize in creating infinitely scalable solutions that elegantly handle millions of concurrent users while maintaining lightning-fast sub-second response times, real-time data synchronization across distributed systems, progressive web app capabilities for offline functionality, and comprehensive API architectures that enable seamless integrations with your existing technology ecosystem.',
  },
  {
    icon: Layout,
    title: 'Websites',
    description: 'Professional company websites, stunning portfolios, and high-converting landing pages meticulously crafted to turn casual visitors into engaged customers and brand advocates. Every site we build is comprehensively SEO-optimized with semantic HTML, structured data markup, optimized meta tags, and lightning-fast load times to rank higher in search results. Fully responsive designs ensure flawless experiences across all devices from smartphones to ultra-wide displays, and designed to showcase your brand with maximum impact through compelling visual hierarchies, strategic calls-to-action, and engaging multimedia content. We obsess over every detail including Core Web Vitals optimization for Google rankings, WCAG accessibility compliance for inclusive experiences, conversion rate optimization through A/B testing insights, analytics integration for data-driven improvements, and user engagement strategies that maximize time on site, reduce bounce rates, and amplify your online presence to drive measurable business growth.',
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
