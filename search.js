import 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js'

axios.get('big-json.json').then(response=>showSearch(response.data))

let SERVER_ADDRESS="http://tmanor.pythonanywhere.com/ping?section"

function ping(section){
    axios.get(`${SERVER_ADDRESS}=${section}`)
}

function showSearch(data){
    // let sections=data.map(i=>{filename:i.filename.split('-')[0].split('.')[0]})
    let s=document.getElementById("search")
    s.oninput=(e)=>{
        Array.from(document.getElementsByClassName("item")).map(i=>i.children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())||i.children[1].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())?i.children[0].style.color="orange":i.children[0].style.color="white")
    }
    s.onchange=(e)=>{
        ping(e.target.value)        
    }
    
    document.getElementById("sections").innerHTML=data.map(i=>`<div class="item"><div class="title" >${i.filename.replace("-images", "")}</div><div class="content" >
    <a href='${i.filename}' >Download file: ${i.filename}</a>
    ${i.content.replace(/<[^>]*>/g, '').split('\n').map(i=>`${i.trim()}\n`).join('')}</div></div>`).join('')


    Array.from(document.getElementsByClassName("item")).forEach(i=>i.addEventListener("click", (e)=>{
        e.target.parentElement.children[1].classList.toggle("visible")
        ping(e.target.innerHTML)
    }))
 }
