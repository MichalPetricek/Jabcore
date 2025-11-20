import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import TechIcon from '@/components/TechIcon'

const techCategories = [
  {
    title: 'Frontend Technologies',
    description: 'Creating beautiful, responsive, and performant user interfaces',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Vue.js',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Robust server-side architecture and scalable API development',
    technologies: [
      'Node.js',
      'Python',
      'C#',
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    technologies: [
      'React',
      'Swift',
      'Kotlin',
      'iOS',
      'Android',
      'Capacitor JS',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and continuous delivery',
    technologies: [
      'Azure',
      'Docker',
      'Git',
      'CI/CD',
      'Ubuntu Server',
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent features powered by cutting-edge AI',
    technologies: [
      'OpenAI',
      'Gemini',
      'Claude',
    ],
  },
  {
    title: 'Design & Prototyping',
    description: 'User-centered design and visual excellence',
    technologies: [
      'Figma',
      'Web Design',
      'Prototyping',
      'User Testing',
    ],
  },
]

export default function TechStack() {
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Our Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage the most powerful, modern technologies to build solutions that are fast, scalable, and future-proof. 
            Our expertise spans the entire development ecosystem—from frontend to backend, mobile to cloud, and everything in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <TechIcon name={tech} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground/80">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Not seeing your preferred tech stack?</span> We're 
              always learning and adapting. If you have specific technology requirements or preferences, we'll evaluate 
              them and integrate the best tools for your project's unique needs. Our commitment is to the right solution, 
              not just the familiar one.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
