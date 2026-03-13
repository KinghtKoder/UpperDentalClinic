import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star, Shield, Clock } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '15K+', label: 'Happy Patients' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '2', label: 'Locations' },
]

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero bg-grid"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary-100/60 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-primary-400 opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-teal-400 opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary-300 opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left — Text Content */}
        <div className="flex flex-col gap-7">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Now Accepting New Patients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.05] tracking-tight text-balance">
              Your Trusted{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-primary">
                  Downtown
                </span>
                <motion.span
                  className="absolute inset-x-0 -bottom-1 h-[3px] bg-gradient-primary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              {' '}Dental Clinic
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl"
          >
            Modern dentistry in a warm, welcoming environment. From routine cleanings to
            full smile transformations — we make every visit comfortable and stress-free.
          </motion.p>

          {/* Trust Signals Row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: Shield, text: 'Insurance Accepted' },
              { icon: Clock, text: 'Emergency Care' },
              { icon: Star, text: '4.9 Google Rating' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                <Icon size={15} className="text-teal-500 shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary px-7 py-3.5 text-base group"
            >
              Book Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+19058534546"
              className="btn-outline px-7 py-3.5 text-base"
            >
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="grid grid-cols-4 gap-4 pt-4 border-t border-neutral-100"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-neutral-900">{value}</div>
                <div className="text-xs text-neutral-500 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-lg">
            {/* Decorative ring blur */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-primary opacity-15 blur-2xl" />

            {/* Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-[0_30px_80px_-10px_rgba(36,120,232,0.25)] border border-white/30"
            >
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&h=800&fit=crop&q=80"
                alt="Patient smiling after dental treatment"
                className="w-full h-[480px] lg:h-[560px] object-cover object-center"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card — Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-8 top-12 glass-card px-4 py-3 z-20 shadow-card"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Star size={16} className="text-white fill-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">4.9 / 5.0</div>
                  <div className="text-xs text-neutral-500">200+ Reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card — Patients */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 bottom-16 glass-card px-4 py-3 z-20 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">15,000+</div>
                  <div className="text-xs text-neutral-500">Happy Patients</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — Emergency */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-4 left-8 glass-card px-4 py-2.5 z-20 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-neutral-700">Emergency Care Available</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-neutral-400 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-neutral-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
