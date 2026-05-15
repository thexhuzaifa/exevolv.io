'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Database, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function IpFinder() {
  const [ip, setIp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/ip-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to save IP');
      } else {
        setMessage(data.message);
        setIp('');
      }
    } catch (err: any) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative gradient-bg py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <Breadcrumbs items={[{ label: 'IP Finder' }]} />
          
          <div className="max-w-3xl">
            <span className="badge-primary mb-4 inline-flex">IP Validation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4 leading-[1.1]">
              Proxy IP Saver
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Submit your proxy IP address to ensure accuracy and prevent duplications across users in real-time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-950">
        <div className="container-custom max-w-xl">
          <div className="card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
                Enter IP Address
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  IPv4 or IPv6 Address
                </label>
                <input
                  type="text"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  placeholder="e.g. 192.168.1.50"
                  className="input-field dark:bg-dark-900 dark:border-dark-700 dark:text-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full shadow-md"
              >
                {loading ? 'Processing...' : 'Save & Verify'}
              </button>
            </form>

            {message && (
              <div className="mt-6 flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 dark:text-green-400 font-medium">
                  {message}
                </p>
              </div>
            )}
            
            {error && (
              <div className="mt-6 flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 dark:text-red-400 font-medium">
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
