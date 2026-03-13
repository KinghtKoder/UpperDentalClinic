import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Amanda R.',
    location: 'Newmarket, ON',
    rating: 5,
    text: 'Absolutely incredible experience from start to finish. Dr. Mitchell made me feel completely at ease during my Invisalign consultation. The office is stunningly modern and the staff is so warm. I actually look forward to my appointments now!',
    treatment: 'Invisalign Treatment',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    date: 'December 2024',
  },
  {
    name: 'Marcus T.',
    location: 'Aurora, ON',
    rating: 5,
    text: 'Had a dental emergency on a Saturday afternoon — they saw me within the hour. Dr. Okonkwo was calm, professional, and fixed the problem quickly. The whole team went above and beyond. This is the only dentist I will ever use.',
    treatment: 'Emergency Care',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    date: 'November 2024',
  },
  {
    name: 'Priya S.',
    location: 'Barrie, ON',
    rating: 5,
    text: 'Brought my two kids here for the first time and they both left smiling — genuinely! Dr. Chen has such a special way with children. The kids dental area is thoughtfully designed and my youngest who was terrified of dentists is now asking when we can go back.',
    treatment: "Children's Dentistry",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80',
    date: 'October 2024',
  },
  {
    name: 'David C.',
    location: 'Newmarket, ON',
    rating: 5,
    text: 'I was incredibly self-conscious about my teeth for years. After my teeth whitening treatment here, I can\'t stop smiling. The results are dramatic but completely natural looking. The whole process was painless and the team was incredibly supportive.',
    treatment: 'Teeth Whitening',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80',
    date: 'September 2024',
  },
  {
    name: 'Jennifer K.',
    location: 'Richmond Hill, ON',
    rating: 5,
    text: 'The dental implant process was something I was dreading for years, but Dr. Okonkwo made it so much easier than I expected. Clear communication at every stage, minimal discomfort, and the result looks and feels completely natural. Life-changing.',
    treatment: 'Dental Implants',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&q=80',
    date: 'August 2024',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  const go = (idx) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length)
  const next = () => go((active + 1) % testimonials.length)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [active])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="badge mb-4"
          >
            Patient Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="section-heading mb-4"
          >
            Real Results,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Real Smiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-subheading"
          >
            Don't just take our word for it — hear from the patients who trust us with their smiles.
          </motion.p>
        </div>

        {/* Overall Rating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-14 py-6 bg-neutral-50 rounded-2xl border border-neutral-100"
        >
          <div className="text-center">
            <div className="text-5xl font-extrabold text-neutral-900">4.9</div>
            <div className="flex gap-0.5 justify-center mt-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-sm text-neutral-500">Google Rating</div>
          </div>
          <div className="h-12 w-px bg-neutral-200 hidden md:block" />
          <div className="text-center">
            <div className="text-2xl font-bold text-neutral-900">200+</div>
            <div className="text-sm text-neutral-500">Verified Reviews</div>
          </div>
          <div className="h-12 w-px bg-neutral-200 hidden md:block" />
          <div className="text-center">
            <div className="text-2xl font-bold text-neutral-900">98%</div>
            <div className="text-sm text-neutral-500">Would Recommend</div>
          </div>
          <a
            href="https://g.page/uppercanadadental"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Read on Google
          </a>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-6 left-8 text-primary-100 pointer-events-none">
            <Quote size={72} strokeWidth={1} />
          </div>

          {/* Card */}
          <div className="relative min-h-[340px] bg-gradient-to-br from-primary-50 via-white to-teal-50 rounded-3xl border border-neutral-100 shadow-card overflow-hidden px-8 md:px-14 py-12">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Avatar + Info */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 shrink-0">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white"
                  />
                  <div>
                    <div className="font-bold text-neutral-900">{testimonials[active].name}</div>
                    <div className="text-xs text-neutral-500">{testimonials[active].location}</div>
                    <StarRating count={testimonials[active].rating} />
                    <div className="mt-2">
                      <span className="badge-teal text-xs">{testimonials[active].treatment}</span>
                    </div>
                  </div>
                </div>

                {/* Review text */}
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light italic">
                    "{testimonials[active].text}"
                  </p>
                  <div className="mt-4 text-xs text-neutral-400">{testimonials[active].date}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    i === active ? 'w-6 bg-primary' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all shadow-sm"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="hidden md:flex justify-center gap-4 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={cn(
                'flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium',
                i === active
                  ? 'border-primary bg-primary-50 text-primary shadow-sm'
                  : 'border-neutral-100 bg-white text-neutral-500 hover:border-neutral-200'
              )}
            >
              <img src={t.avatar} alt="" className="w-7 h-7 rounded-lg object-cover" />
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
