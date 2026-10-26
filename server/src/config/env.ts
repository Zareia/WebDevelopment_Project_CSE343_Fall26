import 'dotenv/config';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name} (see server/.env.example)`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 5000),
  clientOrigins: (process.env.CLIENT_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  // Read lazily so tests and tooling can import the app without a database or secrets.
  get mongoUri() {
    return required('MONGO_URI');
  },
  get jwtSecret() {
    return required('JWT_SECRET');
  },
};
