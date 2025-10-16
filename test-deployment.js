// Simple test to verify deployment
console.log('Testing deployment...');
console.log('Node version:', process.version);
console.log('Environment:', process.env.NODE_ENV);
console.log('Current directory:', process.cwd());
console.log('Files in directory:', require('fs').readdirSync('.'));
