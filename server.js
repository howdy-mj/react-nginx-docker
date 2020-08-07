const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('hello world, with NodeJS dhhd')
    res.send(express.static(path.join(__dirname, './build/index.html')))
})

app.listen(port, () => {
    console.log(`testing at http://localhost:${port}`)
})