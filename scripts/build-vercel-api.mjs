import * as esbuild from 'esbuild';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const outfile = 'api/submit-player.cjs';

mkdirSync(dirname(outfile), { recursive: true });

await esbuild.build({
  entryPoints: ['serverless/submit-player-api.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile,
  logLevel: 'info',
});

console.log(`Bundled Vercel API → ${outfile}`);
