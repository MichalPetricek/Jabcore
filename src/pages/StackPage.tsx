import { motion } from 'framer-motion'
import { 
  Cube, 
  Code, 
  Database, 
  DeviceMobile, 
  Brain, 
  Cloud, 
  PencilLine,
  CheckCircle
} from '@phosphor-icons/react'
import TechIcon from '@/components/TechIcon'

export default function StackPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const technologies = [
    {
      icon: Cube,
      title: 'Solution Architecture',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'We design comprehensive, forward-thinking solutions meticulously tailored to your unique business challenges and opportunities. Our seasoned architects approach every project with strategic vision, analyzing your entire technology ecosystem to craft scalable, maintainable systems. We don\'t just solve today\'s problems—we anticipate tomorrow\'s needs, ensuring your infrastructure evolves seamlessly with your business growth. Through collaborative workshops, technical deep-dives, and continuous refinement, we transform complex requirements into elegant, efficient architectures that deliver measurable business value.',
      features: [
        'Technical analysis & strategic planning',
        'Proof of concept development',
        'Continuous architecture ownership',
        'Scalability & performance optimization'
      ],
      techs: []
    },
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      description: 'Build modern, responsive, and lightning-fast user interfaces that captivate users and drive meaningful engagement. Our frontend expertise spans the entire spectrum of web technologies, from pixel-perfect responsive layouts to complex single-page applications with real-time data synchronization. We leverage cutting-edge frameworks and libraries to create exceptional digital experiences that load instantly, respond smoothly, and work flawlessly across every device and browser. Every interface we craft is optimized for performance, accessibility, and SEO, ensuring your users enjoy premium experiences while your business achieves measurable results.',
      features: [],
      techs: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Vue.js' }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'Robust, scalable, and secure server-side solutions that form the backbone of your digital operations. We architect and build high-performance backends capable of handling millions of concurrent requests while maintaining sub-second response times. Our expertise covers everything from RESTful APIs and GraphQL services to real-time websocket connections and microservices architectures. We implement industry-leading security practices, comprehensive error handling, and intelligent caching strategies to ensure your data remains protected and your services stay responsive under any load. With automated testing, monitoring, and deployment pipelines, we deliver backend systems you can trust.',
      features: [],
      techs: [
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
        { name: 'C#' }
      ]
    },
    {
      icon: DeviceMobile,
      title: 'Mobile Applications',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      description: 'Native and cross-platform mobile applications that deliver exceptional experiences users love to engage with daily. We specialize in building polished, performant mobile apps that feel native to each platform while maximizing code reuse and development efficiency. Our team has extensive experience with both iOS and Android ecosystems, from SwiftUI and Kotlin Compose to cross-platform solutions using Capacitor JS. We offer production-ready mobile templates that can be customized to match your brand identity perfectly, significantly reducing time-to-market and development costs while maintaining the premium quality your users expect. Every app we build integrates seamlessly with platform features, follows design guidelines, and delivers smooth, intuitive experiences.',
      features: [
        'Ready-to-deploy mobile templates',
        'Custom design & branding',
        'Fast time-to-market',
        'Cost-effective solutions'
      ],
      techs: [
        { name: 'iOS' },
        { name: 'Android' },
        { name: 'Capacitor JS' },
        { name: 'Swift' },
        { name: 'Kotlin' }
      ]
    },
    {
      icon: Brain,
      title: 'AI Integration',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      description: 'Harness the transformative power of artificial intelligence to automate complex workflows, enhance decision-making capabilities, and create intelligent applications that adapt and learn. We integrate cutting-edge AI technologies from leading providers like OpenAI, Google Gemini, and Anthropic Claude to give your business a decisive competitive advantage. From natural language processing and content generation to predictive analytics and intelligent automation, we design AI solutions that augment human capabilities and unlock new possibilities. Our expertise includes building sophisticated automation workflows using n8n, implementing custom AI models, and creating conversational interfaces that understand context and intent, transforming how your organization operates and serves customers.',
      features: [],
      techs: [
        { name: 'n8n' },
        { name: 'OpenAI' },
        { name: 'Gemini' },
        { name: 'Claude' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      description: 'Enterprise-grade cloud infrastructure engineered to scale effortlessly with your business growth and evolving demands. We design and implement robust, highly available systems using industry-leading cloud platforms and infrastructure-as-code principles. Our comprehensive approach includes automated CI/CD deployment pipelines that enable rapid, reliable releases, containerization strategies using Docker for consistent environments, advanced monitoring and alerting systems that catch issues before they impact users, and multi-layered security architectures that protect your valuable data. We handle everything from initial server provisioning and configuration to ongoing optimization, ensuring your applications run flawlessly 24/7 with exceptional performance and minimal operational overhead.',
      features: [],
      techs: [
        { name: 'Ubuntu Server' },
        { name: 'Azure' },
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'CI/CD' }
      ]
    },
    {
      icon: PencilLine,
      title: 'UX/UI Design',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      description: 'Beautiful, intuitive interfaces that users genuinely love to interact with, transforming casual visitors into engaged, loyal customers. We blend aesthetic excellence with deep usability research and human-centered design principles to create experiences that feel effortless and delightful. Our design process encompasses comprehensive user research, iterative prototyping, rigorous usability testing, and meticulous attention to every visual detail. Using industry-standard tools like Figma, we craft pixel-perfect designs that not only look stunning but also guide users naturally toward their goals, reduce friction in key workflows, and ultimately drive measurable improvements in engagement, conversion rates, and customer satisfaction. Every color, spacing, and interaction is purposefully chosen to create cohesive experiences that reinforce your brand.',
      features: [],
      techs: [
        { name: 'Figma' },
        { name: 'Web Design' },
        { name: 'Prototyping' },
        { name: 'User Testing' }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Modern Stack</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Cutting-edge technologies and proven methodologies that power exceptional digital solutions. 
              We combine the best tools with deep expertise to build products that scale.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:gap-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.title}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className={`${tech.bgColor} ${tech.color} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8" weight="duotone" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                          {tech.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {tech.description}
                        </p>

                        {tech.features.length > 0 && (
                          <div className="mb-6">
                            <div className="grid sm:grid-cols-2 gap-3">
                              {tech.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle className={`${tech.color} w-5 h-5 flex-shrink-0 mt-0.5`} weight="fill" />
                                  <span className="text-sm text-foreground/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {tech.techs.length > 0 && (
                          <div className="flex flex-wrap gap-3">
                            {tech.techs.map((item, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="bg-secondary/50 hover:bg-secondary px-4 py-2 rounded-lg flex items-center gap-2 border border-border/50 hover:border-primary/30 transition-all duration-200"
                              >
                                <TechIcon name={item.name} className="w-5 h-5" />
                                <span className="font-medium text-sm">{item.name}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
              <h3 className="text-3xl font-display font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology stack can bring your vision to life. 
                We'll help you choose the right tools and build a solution that exceeds expectations.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
