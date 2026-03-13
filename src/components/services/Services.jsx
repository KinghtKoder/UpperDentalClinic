import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Stethoscope, Smile, Sparkles, Zap, AlertCircle, Baby,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'General Dentistry',
    description: 'Comprehensive oral health check-ups, cleanings, fillings, and preventive care to keep your smile healthy for life.',
    color: 'bg-primary-50 text-primary-600',
    accent: 'bg-primary-500',
    href: '#contact',
  },
  {
    icon: Smile,
    title: 'Invisalign & Clear Aligners',
    description: 'Straighten your teeth discreetly with modern clear aligner technology. Comfortable, removable, and virtually invisible.',
    color: 'bg-teal-50 text-teal-600',
    accent: 'bg-teal-500',
    href: '#contact',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening treatments that deliver dramatically brighter results safely and effectively.',
    color: 'bg-amber-50 text-amber-600',
    accent: 'bg-amber-500',
    href: '#contact',
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore full function and beautiful aesthetics.',
    color: 'bg-violet-50 text-violet-600',
    accent: 'bg-violet-500',
    href: '#contact',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Dental Care',
    description: 'Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs. We are here when you need us.',
    color: 'bg-rose-50 text-rose-600',
    accent: 'bg-rose-500',
    href: '#contact',
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    description: 'A fun, gentle, and kid-friendly environment that helps young patients build healthy habits and positive dental experiences.',
    color: 'bg-sky-50 text-sky-600',
    accent: 'bg-sky-500',
    href: '#contact',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-neutral-100 flex flex-col gap-4 cursor-pointer"
    >
      {/* Accent bar */}
      <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* CTA Link */}
      <a
        href={service.href}
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 mt-auto"
      >
        Learn more <ArrowRight size={14} />
      </a>
    </motion.div>
  )
}

export default function Services() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="section-heading mb-4"
          >
            Comprehensive Care for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Every Smile</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-subheading"
          >
            From routine check-ups to advanced cosmetic procedures, our expert team provides
            complete dental care tailored to your individual needs.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 mb-4 text-sm">
            Not sure which treatment is right for you?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
