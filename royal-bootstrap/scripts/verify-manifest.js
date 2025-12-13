const fs = require('fs'), crypto = require('crypto'), path = require('path');
function verifySync(manifest='package.json', sig='signatures/package.json.sig'){
  const pub = path.join(process.cwd(),'keys','rsa-4096-public.pem');
  if (!fs.existsSync(pub)) throw new Error('Public key missing: ' + pub);
  if (!fs.existsSync(manifest)) throw new Error('Manifest missing: ' + manifest);
  if (!fs.existsSync(sig)


 # paste the whole block below into your shell and press Enter
set -e
PROJECT_DIR="${PROJECT_DIR:-$HOME/royal-bootstrap}"
echo "Creating project in $PROJECT_DIR"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

mkdir -p public scripts keys signatures .github/workflows

cat > package.json <<'JSON'
{
  "name": "royal-3d-starter",
  "version": "1.0.0",
  "description": "Starter kit: visualizador 3D + firma RSA pipeline (no incluye private key).",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "sign": "node scripts/sign-manifest.js package.json signatures/package.json.sig",
    "verify": "node scripts/verify-manifest.js package.json signatures/package.json.sig"
  },
  "dependencies": {
    "express": "^4.18.2",
    "serve-static": "^1.15.0"
  }
}
JSON

cat > server.js <<'JS'
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(require('serve-static')(path.join(__dirname, 'public')));
app.get('/api/health', (req,res)=> res.json({ok:true,ts:Date.now()}));
app.get('/api/verify-manifest', (req,res)=>{
  try{
    const v = require('./scripts/verify-manifest');
    const ok = v.verifySync('package.json','signatures/package.json.sig');
    res.json({ok});
  }catch(e){
    res.status(500).json({ok:false,error:e.message});
  }
});
app.listen(PORT, ()=> console.log('Royal 3D server listening on', PORT));
