import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
  
    const handleSubmit = (ev) => {
      ev.preventDefault()
      addGame({ title, cover })
      setTitle("")
      setCover("")
    }
  
    return (
          <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
            <TextInput id="cover" label="Cover" value={cover} onChange={(ev) => setCover(ev.target.value)} />
        <button>Adicionar</button>
      </form>
    )
  }