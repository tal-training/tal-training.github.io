import 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js'

axios.get('big-json.json').then(response=>showSearch(response.data))

function showSearch(data){
    let sections=data.map(i=>i.filename.split('-')[0].split('.')[0])
    let s=document.createElement("input")
    s.setAttribute("autofocus", "true")
    s.oninput=(e)=>{
        document.getElementById("results").innerHTML=data.filter(i=>i.content.toLowerCase().includes(e.target.value.toLowerCase())?i.content:"").map(i=>i.content)
    }
    document.getElementById("main").appendChild(s)
}