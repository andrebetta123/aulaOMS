import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.json({
        ok: 'Hello World'
    })
})

app.listen(3000,() => {
    console.log('Listing on http://localhost:3000')
})

console.log("Hello World!")