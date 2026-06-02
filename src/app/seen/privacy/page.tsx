export const metadata = {
  title: 'Privacy Policy - Seen | Paul Taylor',
  description: 'Privacy policy for the Seen app.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Privacy Policy for Seen</h1>
        <p className="text-gray-600 mb-8"><strong className="text-gray-900 font-semibold">Last updated: June 2026</strong></p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Seen ("we", "our", or "the app") is operated by Paul Taylor. This privacy policy describes how we collect, use, and protect your information when you use the Seen app.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Information We Collect</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">When you use Seen, we collect:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li><strong className="text-gray-900 font-semibold">Account information:</strong> Your Apple ID (via Sign in with Apple), display name, handle, and avatar.</li>
          <li><strong className="text-gray-900 font-semibold">Profile information:</strong> Titles you've watched, are watching, want to watch, ratings, and notes.</li>
          <li><strong className="text-gray-900 font-semibold">Social information:</strong> Your friend connections, recommendations, and privacy settings.</li>
          <li><strong className="text-gray-900 font-semibold">Device information:</strong> Push notification tokens (if opted in), device type, OS version.</li>
          <li><strong className="text-gray-900 font-semibold">Usage data:</strong> Basic analytics about feature use and frequency.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li>Provide the core features of the app</li>
          <li>Send you notifications about friend activity (only with your permission)</li>
          <li>Improve the app based on usage patterns</li>
          <li>Communicate with you about important changes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How We Share Your Information</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">We do not sell your information to third parties.</p>
        <p className="text-gray-600 mb-4 leading-relaxed">We share information only:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li>With friends you've connected with (visible profile info, items added, ratings, unless marked private)</li>
          <li>With service providers (Supabase, TMDB, Apple)</li>
          <li>When required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Third-Party Services</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li><strong className="text-gray-900 font-semibold">Supabase</strong> for authentication, database, and backend</li>
          <li><strong className="text-gray-900 font-semibold">TMDB</strong> for film and TV metadata</li>
          <li><strong className="text-gray-900 font-semibold">Apple</strong> for Sign in with Apple and push notifications</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Your Choices</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
          <li>Mark items as private so friends can't see them</li>
          <li>Remove friends at any time</li>
          <li>Delete your account and all data</li>
          <li>Disable push notifications in device settings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Account Deletion</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          To delete your account, contact us at the email below. Your account enters a 30-day grace period during which you can restore it by signing back in. After 30 days, your data is permanently deleted.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We use industry-standard security measures including encryption in transit and at rest. No method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Seen is not intended for users under 13. We do not knowingly collect information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We may update this policy. We will notify users of significant changes through the app.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Contact</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          For questions about this policy or your data: <a href="mailto:thisispaultaylor@icloud.com" className="underline">thisispaultaylor@icloud.com</a>
        </p>
      </section>
    </div>
  )
}