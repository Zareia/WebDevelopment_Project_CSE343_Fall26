import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { api } from './lib/api';

function Home() {
  const [apiStatus, setApiStatus] = useState('checking…');

  useEffect(() => {
    api<{ status: string }>('/health')
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus('unreachable'));
  }, []);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold">Organizer app</h1>
      <p className="mt-2 text-gray-600">Skeleton is running. API status: {apiStatus}</p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
