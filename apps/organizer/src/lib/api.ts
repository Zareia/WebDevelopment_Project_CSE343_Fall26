// Minimal fetch wrapper. Requests go to /api, which Vite proxies to the server in development.
const BASE_URL = import.meta.env.VITE_API_URL ?? '/api';

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message ?? `Request failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}
