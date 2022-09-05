

const express = require('express');
const cors = require('cors');
const router = require('./test');
const app = express();
const PORT = process.env.PORT || 8081;
 
app.use(cors());
app.use(express.json({strict:false}));
app.use("/test",router);

app.listen(PORT,()=> {
    console.log(`서버 정상적으로 켜졌음 :  ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('🏝  Hello world!');
});
