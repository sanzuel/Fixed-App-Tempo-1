const fs = require('fs');
const html = fs.readFileSync('www/index.html', 'utf8');
if (!html.includes('DRUMMER PRO')) throw new Error('App HTML missing');
if (!html.includes('drummer-pro-offline-records-v1')) throw new Error('Offline storage adapter missing');
console.log('DRUMMER PRO source verified. Capacitor will package www/ into Android.');
