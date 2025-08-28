const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Read version from version.json (fallback to 0.1.0)
const versionFile = path.join(__dirname, 'version.json');
let version = '0.1.0';
try {
  const raw = fs.readFileSync(versionFile, 'utf8');
  version = JSON.parse(raw).version || version;
} catch (_) {}

app.get('/', (req, res) => {
  res.status(200).send('Hello from CI/CD Demo with GitHub Actions & Docker!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/version', (req, res) => {
  res.status(200).json({ version });
});

const port = process.env.PORT || 3000;

// Only start server if run as a script (not when imported by tests)
if (require.main === module) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = app;
