const fs = require('fs');
const express = require('express');
const app = express();
const data = fs.readFileSync('Notes.json');

app.use(express.json());

//get all the notes list
app.get('/api/notes', (req, res) => {
    let notes = JSON.parse(data);
    res.json(notes);
});

//get the note with the given id
app.get('/api/notes/:id', (req, res) => {
    let note = JSON.parse(data).find((n) => n.id === req.params.id);
    if (!note) return res.status(404).send("No note found with the given ID");
    else res.json(note);
});

app.get('/api/notes/:author', (req, res) => {
    let author_notes = JSON.parse(data).filter((n) => n.author === req.params.author);
    res.json(author_notes);
    console.log(author_notes);
})

app.post('/api/notes', (req, res) => {
    //generating a unique id for each   
    let newNote = req.body;
    newNote.id = Date.now();

    //saving to Notes.json file  
    let notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFileSync('Notes.json', JSON.stringify(notes));
    res.json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let notes = JSON.parse(data);
    let note = notes.find((x) => x.id == noteId);
    if (!note) return res.status(400).send("No Note Found    !");
    let index = notes.indexOf(note);
    notes.splice(index, 1);
    fs.writeFileSync("Notes.json", JSON.stringify(notes));
})



let server = app.listen(8888, () => {
    console.log(`Server is running on port ${server.address().port}`);
});