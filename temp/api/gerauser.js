const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'users.json');
const outputDir = path.join(__dirname, 'users');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const rawData = fs.readFileSync(inputFile, 'utf8');
const users = JSON.parse(rawData);

users.forEach(user => {
  const filename = `${user.id}.json`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, JSON.stringify(user, null, 2), 'utf8');
  console.log(`✅ Criado: users/${filename}`);
});
