let notes=JSON.parse(localStorage.getItem("notes")) || {0:"Click On Page to Add Note"}

addNodes()

function addNodes(){
    let i=0
    for (n in notes){
        let note=document.createElement("textarea")
        note.value=notes[i]
        note.setAttribute("index", i)
        note.oninput=(e)=>saveNote(e)
        note.onclick=(e)=>e.stopPropagation()
        document.getElementById("main").appendChild(note)
        i+=1
    }    
}

function saveNote(e){
    notes[e.target.getAttribute("index")]=e.target.value
    localStorage.setItem("notes", JSON.stringify(notes))
}

document.body.onclick=(e)=>{
    notes[Object.keys(notes).length]=""
    document.getElementById("main").innerHTML=""
    addNodes()
}