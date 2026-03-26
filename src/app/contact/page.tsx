export const metadata = {
  title: 'Contact | Paul Taylor',
  description: 'Get in touch with Paul Taylor.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Get in touch</h1>
        <p className="text-gray-600 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Email</h2>
            <a 
              href="mailto:hello@paultaylormade.com" 
              className="text-xl text-gray-900 hover:text-gray-600 transition-colors"
            >
              hello@paultaylormade.com
            </a>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">LinkedIn</h2>
            <a 
              href="https://linkedin.com/in/paultaylor" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-900 hover:text-gray-600 transition-colors"
            >
              linkedin.com/in/paultaylor
            </a>
          </div>
        </div>
        
        {/* Optional: Contact form */}
        {/*
        <form className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Send message
          </button>
        </form>
        */}
      </section>
    </div>
  )
}
