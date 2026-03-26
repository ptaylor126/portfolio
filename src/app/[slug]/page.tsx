import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/content'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return { title: 'Project Not Found' }
  }
  
  return {
    title: `${project.title} | Paul Taylor`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-12">
          <Link 
            href="/#work" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to work
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-16">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Case Study Content */}
        <div className="prose prose-lg max-w-none">
          {/* 
            TODO: Add your case study content here.
            You can either:
            1. Add content directly in the data/content.ts file for each project
            2. Create separate MDX files for each case study
            3. Add the content inline here based on the slug
          */}
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600">
              Add your case study overview here. Describe the project, client, and your role.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-600">
              What problems were you solving? What were the constraints?
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Process</h2>
            <p className="text-gray-600">
              How did you approach the problem? What methods did you use?
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600">
              What did you create? Show your work with images.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
            <p className="text-gray-600">
              What impact did your work have? Include metrics if available.
            </p>
          </section>
        </div>

        {/* Additional Images */}
        {project.images && project.images.length > 0 && (
          <div className="mt-16 space-y-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
