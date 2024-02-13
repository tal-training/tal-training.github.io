import 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js'

axios.get('big-json.json').then(response=>showSearch(response.data))

async function recommend(data){
    let words=data.map(i=>i.content).join('\n').split(' ')
    let freq=[...new Set(words.map(ii=>JSON.stringify([ii,words.reduce((t,i)=>i==ii?t+=1:t,0)])))]
//    let cf=freq.filter(x=>!(x in freq))
    //let max=Math.max(...freq.map(i=>i[1]))
    //let avg=freq.reduce((t,i, ix)=>ix<freq.length-1?t+=JSON.parse(i)[1]:(t/freq.length), 0)
    return freq.filter(i=>1<JSON.parse(i)[1] && JSON.parse(i)[1]<4)
    //return avg
}

function showSearch(data){
    // let sections=data.map(i=>{filename:i.filename.split('-')[0].split('.')[0]})
    let s=document.getElementById("search")
    s.oninput=(e)=>{
        Array.from(document.getElementsByClassName("item")).map(i=>i.children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())||i.children[1].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())?i.children[0].style.color="orange":i.children[0].style.color="white")
    }
    
    document.getElementById("sections").innerHTML=data.map(i=>`<div class="item"><div class="title" >${i.filename.replace("-images", "")}</div><div class="content" >
    <a href='${i.filename}' >Download file: ${i.filename}</a>
    ${i.content.replace(/<[^>]*>/g, '').split('\n').map(i=>`${i.trim()}\n`).join('')}</div></div>`).join('')


    Array.from(document.getElementsByClassName("item")).forEach(i=>i.addEventListener("click", (e)=>{
        e.target.parentElement.children[1].classList.toggle("visible")
    }))
    recommend(data).then(r=>console.log(r))
 }