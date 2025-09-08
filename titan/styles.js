axios.get('http://localhost:5000/')
.then(res => {
    const data = res.data
})
.catch(err => {
    console.log(err)
})

const product = document.getElementById('product')
const add = document.getElementById('add')
const giant = document.querySelector('.giant')
let tasks = []

function inject() {
    const task = product.value
    if (!task.trim()) return

    axios.post('http://localhost:5000/', {tasks: task})
   .then(res => {

    res.data.forEach(item => {
        const newP = document.createElement('p')
        newP.textContent = item.name
        giant.appendChild(newP)
        console.log(item)
    })
    tasks = res.data
    product.value = ""
   })
   .catch(err => {
    console.log(err.message)
   })
}
add.onclick = inject