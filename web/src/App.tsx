import { useEffect, useState } from 'react'
import { supabaseKey, supabaseUrl } from './lib/supabase'

type Status = 'checking' | 'connected' | 'error'

function App() {
  const [status, setStatus] = useState<Status>('checking')

  useEffect(() => {
    fetch(`${supabaseUrl}/auth/v1/health`, { headers: { apikey: supabaseKey } })
      .then((res) => setStatus(res.ok ? 'connected' : 'error'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <main className="shell">
      <h1>UPSC Revision</h1>
      <p className="tagline">Filter · Anchor · Recall · Mistakes log</p>
      <p className={`status status-${status}`}>
        Supabase: {status === 'checking' ? 'checking…' : status}
      </p>
      <p className="build">Build {__BUILD_SHA__}</p>
    </main>
  )
}

export default App
