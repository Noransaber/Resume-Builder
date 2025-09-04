// Simple script to check .env.local file
const fs = require('fs');
const path = require('path');

try {
  const envPath = path.join(__dirname, '.env.local');
  console.log('Checking if .env.local exists:', fs.existsSync(envPath) ? 'Yes' : 'No');
  
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log('\nFile content length:', envContent.length, 'characters');
    console.log('First 20 characters (sanitized):', envContent.substring(0, 20).replace(/[a-zA-Z0-9]/g, 'x'));
    
    // Count lines
    const lines = envContent.split('\n').filter(line => line.trim() !== '');
    console.log('Number of non-empty lines:', lines.length);
    
    // Check for common patterns without revealing values
    const patterns = {
      'Has EMAIL_JS_ID': /NEXT_PUBLIC_EMAIL_JS_ID=/i,
      'Has EMAILJS_TEMPLATE_ID': /NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=/i,
      'Has EMAILJS_PUBLIC_KEY': /NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=/i,
      'Has quotes around values': /=".*"/,
      'Has service_ prefix': /service_[a-zA-Z0-9]/
    };
    
    console.log('\nPattern checks:');
    Object.entries(patterns).forEach(([name, regex]) => {
      console.log(`${name}: ${regex.test(envContent) ? 'Yes' : 'No'}`);
    });
  }
} catch (error) {
  console.error('Error:', error.message);
}