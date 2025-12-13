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
