import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AppleLogo, GooglePlayLogo, DeviceMobile, Pill } from '@phosphor-icons/react'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Pillsee',
      tagline: 'Your Personal Medication Assistant',
      description: 'Pillsee is an innovative medication scanning application that helps you manage your prescriptions effortlessly. Simply scan your medication labels to instantly access detailed information, set reminders, track your doses, and ensure you never miss taking your medicine on time.',
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
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 border-2">
                  <div className={`h-48 bg-gradient-to-br ${product.color} relative`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-24 h-24 text-white drop-shadow-lg" weight="duotone" />
                      </motion.div>
                    </div>
                    {product.available && (
                      <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                        Available Now
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <DeviceMobile className="w-6 h-6 text-primary" weight="duotone" />
                        <h2 className="text-2xl font-display font-bold">{product.name}</h2>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                        Key Features
                      </h3>
                      <ul className="space-y-1.5">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                      <Button 
                        asChild 
                        className="flex-1 gap-2"
                      >
                        <a href={product.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          <AppleLogo weight="fill" />
                          App Store
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="flex-1 gap-2"
                      >
                        <a href={product.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          <GooglePlayLogo weight="fill" />
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
