'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  tags: string[]
  thumbnail: string
  index: number
}

const projectStyles: Record<string, { bg: string; textColor: string; tagBg: string; tagText: string }> = {
  allergytracker: {
    bg: 'bg-teal-700',
    textColor: 'text-white',
    tagBg: 'bg-teal-600/50',
    tagText: 'text-teal-100',
  },
  jetsweat: {
    bg: 'bg-amber-400',
    textColor: 'text-gray-900',
    tagBg: 'bg-amber-300/50',
    tagText: 'text-amber-900',
  },
}

export default function ProjectCard({ slug, title, description, tags, thumbnail, index }: ProjectCardProps) {
  const styles = projectStyles[slug] || projectStyles.allergytracker
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/${slug}`} className="group block">
        <div className={`${styles.bg} rounded-3xl overflow-hidden`}>
          <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[400px]`}>
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className={`flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2 ${styles.textColor}`}>
              <h3 className="text-3xl font-semibold mb-3">
                {title}
              </h3>

              <p className={`mb-6 ${styles.textColor === 'text-white' ? 'text-white/80' : 'text-gray-700'}`}>
                {description}
              </p>

              <div className="mb-6">
                <span className="inline-flex items-center px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium group-hover:bg-gray-700 transition-colors">
                  View case study
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs ${styles.tagBg} ${styles.tagText} rounded-full border border-current/20`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
