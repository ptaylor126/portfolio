export const metadata = {
  title: 'Terms of Service - Seen | Paul Taylor',
  description: 'Terms of service for the Seen app.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Terms of Service for Seen</h1>
        <p className="text-gray-600 mb-8"><strong className="text-gray-900 font-semibold">Last updated: June 2026</strong></p>

        <p className="text-gray-600 mb-4 leading-relaxed">By using the Seen app, you agree to these terms.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Eligibility</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">You must be at least 13 years old to use Seen.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Account</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          You are responsible for maintaining the security of your account. You agree to provide accurate information when creating your account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Acceptable Use</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">You agree not to:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li>Use Seen for any illegal purpose</li>
          <li>Impersonate others</li>
          <li>Harass or abuse other users</li>
          <li>Share content that violates intellectual property rights</li>
          <li>Attempt to access other users' accounts</li>
          <li>Reverse-engineer or interfere with the app's functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Content</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          You retain ownership of content you post (ratings, notes, recommendations). By using Seen, you grant us a license to display this content to your friends and other connected users as designed by the app.
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We rely on The Movie Database (TMDB) for film and television metadata. Image and title rights remain with the original copyright holders.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Friend Connections</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Friendships are mutual. Either party can end a friendship at any time. When a friendship ends, past recommendations remain visible to the recipient but no further activity is shared.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Termination</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We may suspend or terminate your account if you violate these terms. You may delete your account at any time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Disclaimer</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Seen is provided "as is" without warranties of any kind. We do not guarantee the app will be error-free or always available.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of Seen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Changes to These Terms</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We may update these terms. Continued use of the app after changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Contact</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          For questions about these terms: <a href="mailto:thisispaultaylor@icloud.com" className="underline">thisispaultaylor@icloud.com</a>
        </p>
      </section>
    </div>
  )
}