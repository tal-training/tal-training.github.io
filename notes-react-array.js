const root = ReactDOM.createRoot(document.getElementById('root'));

let notes = JSON.parse(localStorage.getItem("notes")) || ["n0", "n1", "n2" ]

if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

root.render(<Notes notes={notes} />)

function Note(p) {
    function save() {
        let notesArray = JSON.parse(localStorage.getItem("notes"))
        notesArray[index] = text
        localStorage.setItem("notes", JSON.stringify(notesArray))
    }
    const [text, setText] = React.useState(p.text)
    const [index, setIndex] = React.useState(p.index)
    return <textarea onChange={(e) => {
        setText(e.target.value)
        save()
    }
    }>{text}</textarea>
}

function Notes(p) {
    const [notes, setNotes] = React.useState(p.notes)
    const [counter, setCounter] = React.useState(notes.length)
    return (
        <div>
        <button onClick={()=>{
            setNotes([...notes, ""])
            setCounter(notes.length)
            console.log(counter);
        }
    }>Add</button>
        {notes.map((value, i) => <Note text={value} index={i} />)} 
        </div>
)
}