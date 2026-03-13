import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  UserCheck, Cpu, Zap, Heart, CreditCard, Clock,
  CheckCircle2
} from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Experienced Dental Team',
    description: 'Our dentists bring 50+ combined years of expertise across all areas of dentistry — from preventive care to complex restorations.',
    color: 'text-primary-600 bg-primary-50',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'Digital X-rays, cone beam CT scanning, intraoral cameras, and laser dentistry for precise, comfortable treatments.',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Emergency Services',
    description: 'Dental emergencies don\'t wait — neither do we. Same-day emergency appointments available Monday to Saturday.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Heart,
    title: 'Comfortable Experience',
    description: 'From a welcoming reception area to gentle chairside manner and sedation options, your comfort is our first priority.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: CreditCard,
    title: 'Insurance Accepted',
    description: 'We work with all major insurance providers and offer flexible payment plans to make dental care accessible for everyone.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Early mornings, evenings, and Saturdays — we schedule around your busy life so dental care is never inconvenient.',
    color: 'text-sky-600 bg-sky-50',
  },
]

const achievements = [
  { value: '20+', label: 'Years Serving Newmarket' },
  { value: '15K+', label: 'Patients Treated' },
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '6', label: 'Specialty Services' },
]

export default function WhyChooseUs() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })
  const imageRef = useRef(null)
  const imageInView = useInView(imageRef, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Image + Achievements */}
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={imageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute inset-8 bg-gradient-primary rounded-3xl opacity-10 blur-3xl" />

              {/* Main clinic image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_-8px_rgba(36,120,232,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&h=600&fit=crop&q=80"
                  alt="Modern dental office"
                  className="w-full h-[500px] lg:h-[580px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-transparent" />
              </div>

              {/* Achievement cards overlay */}
              <div className="absolute -bottom-6 -right-4 grid grid-cols-2 gap-3 max-w-xs">
                {achievements.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.85, y: 16 }}
                    animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card p-4 text-center shadow-card"
                  >
                    <div className="text-2xl font-extrabold text-neutral-900">{item.value}</div>
                    <div className="text-xs text-neutral-500 font-medium mt-0.5 leading-tight">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Reasons */}
          <div ref={headingRef} className="flex flex-col gap-10 lg:pt-4">
            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
                className="badge mb-4"
              >
                Why Choose Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="section-heading mb-4"
              >
                The Upper Canada{' '}
                <span className="text-transparent bg-clip-text bg-gradient-primary">Difference</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="section-subheading"
              >
                We combine clinical excellence with genuine warmth to create dental experiences
                that patients actually look forward to.
              </motion.p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason, i) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                    className="flex gap-3.5 group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${reason.color} flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <h3 className="text-sm font-semibold text-neutral-900">{reason.title}</h3>
                        <CheckCircle2 size={13} className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Book Your Visit
              </button>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                View Our Services
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
