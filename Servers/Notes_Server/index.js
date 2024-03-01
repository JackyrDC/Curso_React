const fs = require('fs');
const express = require('express');
const app = express();
const data = fs.readFileSync('Notes.json');

let notes = JSON.parse(data);

//console.log(notes);