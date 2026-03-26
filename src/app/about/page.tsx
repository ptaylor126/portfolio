import Image from 'next/image'
import { siteConfig } from '@/data/content'

export const metadata = {
  title: 'About | Paul Taylor',
  description: 'Learn more about Paul Taylor, UX/UI Designer.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/image-002.png"
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">About me</h1>
            
            <div className="space-y-4 text-gray-600">
              <p>
                {siteConfig.tagline}
              </p>
              
              <p>
                {siteConfig.currentRole}
              </p>
              
              {/* Add more about content here */}
              <p>
                With a background in photography, I bring a unique visual perspective to my design work. 
                I believe great design comes from understanding people first, then crafting solutions 
                that feel intuitive and delightful.
              </p>
              
              <p>
                I've worked across health tech, SaaS platforms, and AI-powered tools, 
                always focused on creating experiences that balance user needs with business goals.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                View resume
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
