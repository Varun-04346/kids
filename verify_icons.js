import fs from 'fs';
import path from 'path';
import * as L from 'lucide-react';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles('./src').filter(f => f.endsWith('.jsx'));
let allMissing = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
  if (matches) {
    const icons = matches[1].split(',').map(i => i.trim().split(' as ')[0]);
    const missing = icons.filter(name => name && !L[name]);
    if (missing.length > 0) {
      allMissing.push({ file, missing });
    }
  }
});

console.log(JSON.stringify(allMissing, null, 2));
