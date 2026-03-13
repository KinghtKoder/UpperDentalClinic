import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin, Phone, Mail, Clock, CalendarCheck,
  CheckCircle, ArrowRight, Send
} from 'lucide-react'
import { cn } from '@/lib/utils'

const hours = [
  { day: 'Monday – Wednesday', time: '8:00 am – 7:00 pm' },
  { day: 'Thursday – Friday', time: '8:00 am – 5:00 pm' },
  { day: 'Saturday', time: '9:00 am – 4:00 pm' },
  { day: 'Sunday', time: 'Closed' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
}

export default function Appointment() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="badge mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="section-heading mb-4"
          >
            Book Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Appointment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-subheading"
          >
            Ready for a healthier, more confident smile? Reach out to our team and we'll
            find a time that works perfectly for you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-primary-600 to-teal-500 rounded-3xl p-8 text-white shadow-hero">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Address</div>
                    <div className="text-sm text-white/80 leading-relaxed mt-0.5">
                      Upper Canada Mall, Lower Level<br />
                      17600 Yonge St, Newmarket, ON L3Y 4Z1
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Phone</div>
                    <a href="tel:+19058534546" className="text-sm text-white/80 hover:text-white transition-colors mt-0.5 block">
                      (905) 853-4546
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Email</div>
                    <a href="mailto:info@uppercanadadental.com" className="text-sm text-white/80 hover:text-white transition-colors mt-0.5 block">
                      info@uppercanadadental.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-neutral-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-primary-600" />
                <h3 className="font-bold text-neutral-900">Office Hours</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">{h.day}</span>
                    <span className={cn(
                      'font-medium',
                      h.time === 'Closed' ? 'text-neutral-400' : 'text-neutral-900'
                    )}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs text-teal-700 font-medium">Emergency appointments available</span>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-44 shadow-card border border-neutral-100">
              <iframe
                title="Upper Canada Dental location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.8763584049936!2d-79.46611372364254!3d44.05762947107627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad2d1ad0f2b0f%3A0xe17c8b3a5ec65a21!2sUpper%20Canada%20Dental%20Centre!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-neutral-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Request Received!</h3>
                  <p className="text-neutral-500 max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-2"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                      <CalendarCheck size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">Appointment Request</h3>
                      <p className="text-sm text-neutral-500">We'll confirm within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    {/* Name + Email */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={cn(
                            'w-full rounded-xl border px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary',
                            errors.name ? 'border-rose-400 bg-rose-50' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                          )}
                        />
                        {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={cn(
                            'w-full rounded-xl border px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary',
                            errors.email ? 'border-rose-400 bg-rose-50' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                          )}
                        />
                        {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(905) 555-0123"
                          className={cn(
                            'w-full rounded-xl border px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary',
                            errors.phone ? 'border-rose-400 bg-rose-50' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                          )}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary hover:border-neutral-300"
                        >
                          <option value="">Select a service…</option>
                          <option>General Dentistry</option>
                          <option>Invisalign / Clear Aligners</option>
                          <option>Teeth Whitening</option>
                          <option>Dental Implants</option>
                          <option>Emergency Care</option>
                          <option>Children's Dentistry</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Preferred Appointment Date</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary hover:border-neutral-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message / Notes</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us anything else we should know (e.g. dental anxiety, specific concerns)…"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800 outline-none transition-all focus:ring-2 focus:ring-primary-200 focus:border-primary hover:border-neutral-300 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary justify-center py-4 text-base mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <>
                          <Send size={16} />
                          Request Appointment
                        </>
                      )}
                    </button>

                    <p className="text-xs text-neutral-400 text-center">
                      By submitting you agree to our privacy policy. We never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
