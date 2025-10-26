"use client"

import { useEffect, useState } from "react"

export default function VerifyAds() {
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetch("/app-ads.txt")
      .then((res) => res.text())
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-pitch-black text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">app-ads.txt Verification</h1>

        {loading && <p className="text-center text-gray-400">Loading...</p>}

        {error && (
          <div className="bg-red-900/20 border border-red-500 rounded p-4 mb-4">
            <p className="text-red-300">❌ Error: {error}</p>
          </div>
        )}

        {content && (
          <div className="bg-blue-900/20 border border-blue-500 rounded p-4 mb-4">
            <p className="text-green-300 mb-4">✅ File found and accessible!</p>
            <div className="bg-black p-4 rounded font-mono text-sm overflow-auto">{content}</div>
            <p className="text-gray-400 mt-4 text-sm">
              You can access the file at: <code className="text-blue-accent">/app-ads.txt</code>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
