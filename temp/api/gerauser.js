const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'services', 'index.json');
const outputDir = path.join(__dirname, 'services');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const rawData = fs.readFileSync(inputFile, 'utf8');
const users = JSON.parse(rawData);

users.forEach(user => {
  const userDir = path.join(outputDir, String(user.id));
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir);
  }

  const filepath = path.join(userDir, 'index.json');
  fs.writeFileSync(filepath, JSON.stringify(user, null, 2), 'utf8');
  console.log(`✅ Criado: users/${user.id}/index.json`);
});
