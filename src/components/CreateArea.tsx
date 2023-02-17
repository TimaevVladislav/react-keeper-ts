import React, {useState} from "react"

export const CreateArea = ({addHandler}: any) => {
    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({title: "", content: ""})

    const changeHandler = (event: React.ChangeEvent) => {
        const { name, value }: any = event.target
        setNote(prevNote => ({ ...prevNote, [name]: value }))
    }

    const submitHandler = (event: React.FormEvent) => {
        if (note.content || note.title) addHandler(note)
        setNote({ title: "", content: "" })
        event.preventDefault()
    }

    const expandHandler = () => setExpanded(true)

    return (
        <form className="create-note">

            {isExpanded && (
                <input
                    name="title"
                    onChange={changeHandler}
                    value={note.title}
                    placeholder="Title"
                />
            )}

            <textarea
                name="content"
                onClick={expandHandler}
                onChange={changeHandler}
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
            />

            <button onClick={submitHandler}>+</button>
        </form>
    )
}