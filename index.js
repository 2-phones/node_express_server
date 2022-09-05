import express from "express";

const app = express();
const PORT = 9000;
app.use( "/" , (req,res) => {
    res.send({ message: "Hello data!"})
})
app.listen(PORT, () => {
    console.log(`서버 정상적으로 작동중 : ${PORT}` );
});
