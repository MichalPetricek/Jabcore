import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AppleLogo, GooglePlayLogo, Pill } from '@phosphor-icons/react'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Pillsee',
      tagline: 'Your Personal Medication Assistant',
      description: 'Pillsee is an innovative medication scanning and management application that revolutionizes how you track and manage your prescriptions effortlessly. Simply scan your medication labels using advanced AI-powered optical character recognition to instantly access comprehensive medication information including dosage instructions, potential side effects, and important warnings. Set intelligent reminders that adapt to your schedule and ensure you never miss taking your medicine at the right time. Track your medication history over time, monitor adherence patterns, receive alerts for potential drug interactions when adding new prescriptions, and share detailed reports with your healthcare providers. With an intuitive interface designed for all ages and seamless synchronization across all your devices, Pillsee becomes your trusted companion for maintaining medication compliance and taking control of your health journey.',
      icon: Pill,
      features: [
        'AI-powered medication recognition',
        'Smart dosage reminders',
        'Drug interaction warnings',
        'Prescription history tracking'
      ],
      appStoreUrl: '#',
      playStoreUrl: '#',
      color: 'from-blue-500 to-cyan-400',
      available: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium">Our Products</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Apps We've Built <span className="gradient-text">For You</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of innovative applications designed to simplify your daily life. 
            Built with passion, precision, and user experience at the core.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product) => {
            const Icon = product.icon
            return (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} p-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <Icon className="w-full h-full text-white" weight="duotone" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h2 className="text-2xl font-display font-bold">{product.name}</h2>
                          {product.available && (
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20 flex-shrink-0">
                              Available
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium">{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg">
                            <span className="text-primary mt-0.5 font-bold">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        asChild 
                        className="flex-1 gap-2 group/btn"
                        size="lg"
                      >
                        <a href={product.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          <AppleLogo weight="fill" className="group-hover/btn:scale-110 transition-transform" />
                          App Store
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="flex-1 gap-2 group/btn"
                        size="lg"
                      >
                        <a href={product.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          <GooglePlayLogo weight="fill" className="group-hover/btn:scale-110 transition-transform" />
                          Google Play
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 rounded-2xl bg-muted/50 border border-border">
            <p className="text-muted-foreground mb-2">More amazing apps coming soon...</p>
            <p className="text-sm text-muted-foreground/70">
              Stay tuned for updates on our latest innovations
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
