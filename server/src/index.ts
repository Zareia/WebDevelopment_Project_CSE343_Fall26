import { env } from './config/env';
import { connectDB } from './db';
import { createApp } from './app';

async function main() {
  await connectDB(env.mongoUri);

  const app = createApp();
  app.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`);
  });
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
