import React from "react"
import DeleteIcon from '@mui/icons-material/Delete'

export const Note = (props: any) => {

    const deleteHandler = () => props.deleteHandler(props.id)

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <button onClick={deleteHandler}>
                <DeleteIcon />
            </button>
        </div>
    )
}