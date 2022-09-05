
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({strict:false}));

app.listen(8081,()=> {
    console.log('서버 정상적으로 켜졌음');
});

app.get('/', (req, res) => {
    res.send('🏝  Hello world!');
});
