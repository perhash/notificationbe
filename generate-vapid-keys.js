import webpush from 'web-push';
import fs from 'fs';

// Generate VAPID keys
const vapidKeys = webpush.generateVAPIDKeys();

console.log('🔑 VAPID Keys Generated:');
console.log('Public Key (use in frontend):', vapidKeys.publicKey);
console.log('Private Key (use in backend):', vapidKeys.privateKey);

// Save to .env file
const envContent = `
# VAPID Keys for Push Notifications
VAPID_PUBLIC_KEY=${vapidKeys.publicKey}
VAPID_PRIVATE_KEY=${vapidKeys.privateKey}
`;

// Append to .env file
fs.appendFileSync('.env', envContent);
console.log('✅ Keys saved to .env file');

// Also create a .env.example file
const envExampleContent = `
# VAPID Keys for Push Notifications
VAPID_PUBLIC_KEY=your_public_key_here
VAPID_PRIVATE_KEY=your_private_key_here
`;

fs.writeFileSync('.env.example', envExampleContent);
console.log('✅ .env.example file created');

console.log('\n📋 Next Steps:');
console.log('1. Update frontend with the public key');
console.log('2. Deploy backend with the private key');
console.log('3. Test push notifications on iOS Safari');
