import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Meet the Team', href: '#team' },
  { label: 'Patient Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#contact' },
]

const services = [
  'General Dentistry',
  'Invisalign & Clear Aligners',
  'Teeth Whitening',
  'Dental Implants',
  'Emergency Dental Care',
  "Children's Dentistry",
]

const hours = [
  { day: 'Mon – Wed', time: '8:00 am – 7:00 pm' },
  { day: 'Thu – Fri', time: '8:00 am – 5:00 pm' },
  { day: 'Saturday', time: '9:00 am – 4:00 pm' },
  { day: 'Sunday', time: 'Closed' },
]

const social = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* CTA Banner */}
      <div className="bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready for a Healthier Smile?</h3>
            <p className="text-white/80 text-sm mt-1">Book your appointment today and take the first step.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:+19058534546" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-colors">
              <Phone size={15} /> Call Now
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary text-sm font-semibold hover:bg-neutral-100 transition-colors shadow-md"
            >
              Book Appointment <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-4H8l4-7v4h3l-4 7z"/>
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-white tracking-tight">Upper Canada</div>
                <div className="text-xs font-medium text-primary-400">Dental Centre</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your trusted dental home in the heart of Newmarket. Providing comprehensive, compassionate dental care for over 20 years.
            </p>
            <div className="flex gap-2.5">
              {social.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="text-xs text-neutral-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
              Accepting New Patients
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-primary-400 -ml-1 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleNav(e, '#services')}
                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-primary-400 -ml-1 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Contact & Hours</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-neutral-400 leading-snug">Upper Canada Mall, Lower Level<br />17600 Yonge St, Newmarket, ON</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-primary-400 shrink-0" />
                <a href="tel:+19058534546" className="text-neutral-400 hover:text-white transition-colors">(905) 853-4546</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-primary-400 shrink-0" />
                <a href="mailto:info@uppercanadadental.com" className="text-neutral-400 hover:text-white transition-colors">info@uppercanadadental.com</a>
              </div>
              <div className="mt-1 border-t border-neutral-800 pt-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <Clock size={13} className="text-primary-400" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">Office Hours</span>
                </div>
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-xs text-neutral-500 mb-1.5">
                    <span>{h.day}</span>
                    <span className={h.time === 'Closed' ? 'text-neutral-600' : 'text-neutral-400'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Upper Canada Dental Centre. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
