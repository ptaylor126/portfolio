'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/content'

export default function TestimonialCarousel() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.slice(0, 3).map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>

          <blockquote className="text-sm text-gray-600 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
        </motion.div>
      ))}
    </div>
  )
}
