const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const router = require("./web/routes");


app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
})