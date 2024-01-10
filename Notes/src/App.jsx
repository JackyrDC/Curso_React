import NotesRender from './components/NotesRender'
import { useState } from 'react'

const Notes = [
  {
      "id": 1,
      "title": "First Note",
      "body": "This is my first note."
  },
  {
      "id": 2,
      "title": "Second Note",
      "body": "This is my second note. It's pretty neat!"
  }
]


const  App = () => {
  const [note, setNote] = useState(Notes)
  const [newNote, setNewNote] = useState('new Note')

  const addNote =(event) => {
    event.preventDefault()
    const noteObject = {
      id: note.length + 1,
      body: newNote,
      title: note.length  + " Note" 
    }
  
    setNote(note.concat(noteObject))
    setNewNote('')
  }

  const handleChange = (event) =>
  {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
  <div>
    <ul>
    {note.map(notes => 
      <NotesRender key = {notes.id} title = {notes.title} body = {notes.body}/>
      )}
    </ul>
    <form onSubmit={addNote}>
      <input
        value = {newNote}
        onChange= {handleChange}
      />
      <button type = "submit">Save</button>
    </form>
  </div>
  )
}

export default App
