export default function HomePage() {
  return (
    <div className="min-h-screen bg-pitch-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-blue-accent">Akshay's</span> Developer Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Site hosting app-ads.txt for AdMob verification</p>
        <div className="bg-pitch-black/50 border border-blue-accent/30 rounded-lg p-8 mb-8">
          <p className="text-gray-300 mb-4">Your app-ads.txt file is configured and ready for AdMob verification.</p>
          <p className="text-sm text-gray-400">
            Access your app-ads.txt file at: <code className="text-blue-accent font-mono">/app-ads.txt</code>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-blue-accent text-white rounded-lg font-semibold hover:bg-blue-accent/80 transition-colors duration-300"
          >
            View Full Portfolio
          </a>
          <a
            href="/app-ads.txt"
            target="_blank"
            className="px-8 py-3 border-2 border-blue-accent text-blue-accent rounded-lg font-semibold hover:bg-blue-accent/10 transition-colors duration-300"
            rel="noreferrer"
          >
            View app-ads.txt
          </a>
        </div>
      </div>
    </div>
  )
}
