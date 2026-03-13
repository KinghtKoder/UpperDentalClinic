import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, GraduationCap, Heart, Linkedin } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Principal Dentist & Founder',
    specialization: 'General & Cosmetic Dentistry',
    bio: 'With over 18 years of experience, Dr. Mitchell leads our team with a passion for patient-centered care and aesthetically beautiful smiles.',
    education: 'University of Toronto, DDS',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=480&fit=crop&q=80',
    badges: ['General Dentistry', 'Cosmetic', 'Invisalign Certified'],
    color: 'from-primary-500 to-teal-500',
  },
  {
    name: 'Dr. James Okonkwo',
    title: 'Senior Associate Dentist',
    specialization: 'Orthodontics & Implants',
    bio: 'Dr. Okonkwo specializes in dental implants and orthodontic treatments, bringing precision craftsmanship to every procedure.',
    education: 'McGill University, DMD',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=480&fit=crop&q=80',
    badges: ['Implants', 'Orthodontics', 'Sedation'],
    color: 'from-violet-500 to-primary-500',
  },
  {
    name: 'Dr. Emily Chen',
    title: 'Pediatric Specialist',
    specialization: "Children's Dentistry",
    bio: "Dr. Chen creates a fun and stress-free environment for our youngest patients, building healthy dental habits from the ground up.",
    education: 'Western University, DDS',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=480&fit=crop&q=80',
    badges: ["Pediatric Dentistry", 'Preventive Care', 'Sedation'],
    color: 'from-teal-500 to-sky-500',
  },
]

function DoctorCard({ doctor, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400 border border-neutral-100"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent`} />

        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${doctor.color} text-white text-xs font-semibold mb-2`}>
            {doctor.specialization}
          </div>
          <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
          <p className="text-sm text-white/80 font-medium">{doctor.title}</p>
        </div>

        {/* LinkedIn hover badge */}
        <motion.div
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          whileHover={{ scale: 1.1 }}
        >
          <Linkedin size={16} className="text-white" />
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-4">
        {/* Bio */}
        <p className="text-sm text-neutral-500 leading-relaxed">{doctor.bio}</p>

        {/* Education */}
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-600">
          <GraduationCap size={14} className="text-primary-500 shrink-0" />
          {doctor.education}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {doctor.badges.map((badge) => (
            <span key={badge} className="badge text-xs">
              {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full mt-2 py-2.5 rounded-xl border border-primary-200 text-primary text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
        >
          Book with {doctor.name.split(' ')[1]}
        </button>
      </div>
    </motion.div>
  )
}

export default function Doctors() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true })

  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="badge mb-4"
          >
            Our Dental Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="section-heading mb-4"
          >
            Meet the Experts Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">Your Smile</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-subheading"
          >
            Our experienced and compassionate team of dental professionals is dedicated to
            providing exceptional care in a comfortable environment.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={i} />
          ))}
        </div>

        {/* Team highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-primary-50 via-white to-teal-50 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-100"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
              <Award size={22} className="text-primary-600" />
            </div>
            <div>
              <div className="font-bold text-neutral-900">ODA Member Dentists</div>
              <div className="text-sm text-neutral-500">All doctors are certified by the Ontario Dental Association</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
              <Heart size={22} className="text-teal-600" />
            </div>
            <div>
              <div className="font-bold text-neutral-900">Patient-First Philosophy</div>
              <div className="text-sm text-neutral-500">Your comfort and wellbeing drive every decision we make</div>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shrink-0"
          >
            Meet the Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
