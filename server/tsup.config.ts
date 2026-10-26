import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'node24',
  clean: true,
  // The shared package ships TypeScript source, so bundle it into the server build.
  noExternal: ['@app/shared'],
});
