import React, {useState} from "react"

import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {CreateArea} from "./components/CreateArea"
import {Note} from "./components/Note"
import data from "./data/notes"

function App() {
    const [notes, setNotes] = useState(data)

    const addHandler = (newNote: any) => setNotes(prevNote => ([ ...prevNote, newNote ]))

    const deleteHandler = (id: number) => {
        setNotes((prevNotes: any) =>  prevNotes.filter((note: any, index: number) => index !== id))
    }

    return (
    <>
      <Header />
      <CreateArea addHandler={addHandler} />
        {notes.map((note, index) => (
            <Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                deleteHandler={deleteHandler}
            />
        ))}
      <Footer />
    </>
  )
}

export default App
