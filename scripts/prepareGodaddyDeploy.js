import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const frontendDist = path.join(rootDir, 'frontend', 'dist');
const outputDir = path.join(rootDir, 'godaddy-deploy');

if (!fs.existsSync(frontendDist)) {
  console.error('Frontend build not found. Run npm run build first.');
  process.exit(1);
}

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}

fs.mkdirSync(outputDir, { recursive: true });

const copyRecursive = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyRecursive(frontendDist, outputDir);

const rootFiles = [
  { src: path.join(rootDir, 'README.md'), dest: path.join(outputDir, 'README.txt') },
  { src: path.join(rootDir, '.env.example'), dest: path.join(outputDir, '.env.example') },
];

for (const file of rootFiles) {
  if (fs.existsSync(file.src)) {
    fs.copyFileSync(file.src, file.dest);
  }
}

const deploymentNote = `GoDaddy deployment package generated successfully.

Upload the contents of the godaddy-deploy folder to your GoDaddy hosting root.
For a React SPA, ensure your hosting uses index fallback for client-side routes.
`;

fs.writeFileSync(path.join(outputDir, 'DEPLOYMENT_NOTES.txt'), deploymentNote);
console.log(`GoDaddy deployment package created at: ${outputDir}`);
