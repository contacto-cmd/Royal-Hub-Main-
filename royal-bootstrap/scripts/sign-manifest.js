const fs = require('fs'), crypto = require('crypto'), path = require('path');
const [,, manifest='package.json', out='signatures/package.json.sig'] = process.argv;
let pk = null;
if (process.env.RSA_PRIVATE_PEM_BASE64) pk = Buffer.from(process.env.RSA_PRIVATE_PEM_BASE64,'base64').toString('utf8');
else { const p = path.join(process.cwd(),'keys','rsa-4096-private.pem'); if (fs.existsSync(p)) pk = fs.readFileSync(p,'utf8'); }
if (!pk) { console.error('Private key missing. Use RSA_PRIVATE_PEM_BASE64 or keys/rsa-4096-private.pem'); process.exit(2); }
const m = fs.readFileSync(manifest); const s = crypto.createSign('RSA-SHA256'); s.update(m);
fs.mkdirSync(require('path').dirname(out), { recursive:true }); fs.writeFileSync(out, s.sign(pk)); console.log('Signed', manifest, '->', out);
