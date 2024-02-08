import 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js'

axios.get('test.json').then(response=>document.body.innerHTML=response.data[0].name)
