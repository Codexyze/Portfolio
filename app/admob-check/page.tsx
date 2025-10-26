export default function AdMobCheck() {
  return (
    <div className="min-h-screen bg-pitch-black text-white flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-accent">AdMob app-ads.txt Check</h1>

        <div className="bg-pitch-black border border-blue-accent/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">📋 File Details:</h2>
          <div className="bg-black p-4 rounded mb-4">
            <p className="font-mono text-sm text-green-300 break-all">
              google.com,pub-3150717277102846,DIRECT,f08c47fec0942fa0
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-400">📍 File Location:</p>
              <p className="text-blue-accent font-mono">/public/app-ads.txt</p>
            </div>

            <div>
              <p className="text-gray-400">🌐 Accessible At:</p>
              <p className="text-blue-accent font-mono">https://v0-akshay-sarapure-portfolio.vercel.app/app-ads.txt</p>
            </div>

            <div>
              <p className="text-gray-400">✅ Format Requirements:</p>
              <ul className="text-gray-300 mt-2 space-y-1 ml-4">
                <li>✓ No spaces after commas</li>
                <li>✓ Single line only</li>
                <li>✓ Plain text (no HTML)</li>
                <li>✓ UTF-8 encoding</li>
                <li>✓ No blank lines at end</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">🔧 AdMob Verification Steps:</h2>
          <ol className="space-y-3 text-sm">
            <li>
              <span className="text-blue-accent font-semibold">1.</span> Go to{" "}
              <a
                href="https://admob.google.com"
                target="_blank"
                className="text-blue-accent underline"
                rel="noreferrer"
              >
                AdMob Console
              </a>
            </li>
            <li>
              <span className="text-blue-accent font-semibold">2.</span> Navigate to Settings → Account information
            </li>
            <li>
              <span className="text-blue-accent font-semibold">3.</span> Under "Publishing" section, verify:
              <ul className="ml-4 mt-2 text-gray-300">
                <li>• Domain: v0-akshay-sarapure-portfolio.vercel.app</li>
                <li>• Publisher ID: pub-3150717277102846</li>
              </ul>
            </li>
            <li>
              <span className="text-blue-accent font-semibold">4.</span> Check "Domain verification status" is VERIFIED
            </li>
            <li>
              <span className="text-blue-accent font-semibold">5.</span> Wait 24-48 hours for AdMob to crawl and verify
            </li>
          </ol>
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>If issues persist, check:</p>
          <ul className="mt-2 space-y-1">
            <li>• Domain is verified in Google Search Console</li>
            <li>• File is accessible and returns plain text</li>
            <li>• No DNS/SSL certificate issues</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
