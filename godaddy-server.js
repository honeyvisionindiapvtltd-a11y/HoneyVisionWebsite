import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

const frontendDist = path.join(__dirname, "frontend", "dist");

// Serve React/Vite static files
app.use(express.static(frontendDist));

// React Router fallback
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendDist, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("========================================");
  console.log("HoneyVision Frontend Started");
  console.log(`PORT: ${PORT}`);
  console.log(`Frontend: ${frontendDist}`);
  console.log("========================================");
});