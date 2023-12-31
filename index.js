const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {res.json({msg: 'Hello world'});});

app.get('/echo/:id', (req, res) => {const id = req.params.id;res.json({id: id});});

app.listen(port, () => {console.log(`Server listening on port ${port}`);})
