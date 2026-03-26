import Image from 'next/image'
import Link from 'next/link'
import { siteConfig, projects } from '@/data/content'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-sm px-8 py-16 md:px-16 md:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-100 mb-10">
              <Image
                src="/images/image-002.png"
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8 max-w-2xl">
              I'm a photographer-turned-designer specializing in{' '}
              <span className="inline-flex items-center px-3 py-1 bg-blue-400 text-white rounded-lg font-medium">UX/UI</span>
              {' '}&{' '}
              <span className="inline-flex items-center px-3 py-1 bg-blue-400 text-white rounded-lg font-medium">design systems</span>
              {' '}for{' '}
              <span className="inline-flex items-center px-2 py-1 bg-gray-800 text-white rounded-lg font-medium">AI</span>
              {' '}enhanced experiences.{' '}
              <em className="not-italic font-normal italic">Camera still always close by.</em>
            </p>

            <p className="text-gray-500 mb-8">
              Currently designing intelligent meal planning solutions @{' '}
              <span className="font-semibold text-gray-700">MealMatch AI</span>
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              Contact me
            </Link>

            <div className="mt-10">
              <p className="text-sm text-gray-400 mb-4">Previously:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <span className="mr-2">💊</span> Medical apps
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <span className="mr-2">💊</span> SaaS platforms
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <span className="mr-2">🤖</span> AI-powered tools
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="max-w-4xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-400 text-white text-sm font-medium rounded-full mb-4">
            case studies
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Selected work</h2>
          <p className="text-gray-600">Some problems I've helped solve</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange-400 text-white text-sm font-medium rounded-full mb-4">
            social proof
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Testimonials & feedback</h2>
          <p className="text-gray-600">I've had the chance to work with some great people</p>
        </div>

        <TestimonialCarousel />
      </section>
    </div>
  )
}
