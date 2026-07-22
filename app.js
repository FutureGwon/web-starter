const express=require('express');
const app=express();
app.get('/api/health',(r,s)=>s.json({ok:true}));
app.listen(3000);
