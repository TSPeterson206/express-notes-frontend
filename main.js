

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()

  const content = event.target.content.value

  axios.post('http://localhost:5000/notes', {content, completed: false})
  .then(response => {
    init()
  })
})



function init(){
  axios.get('http://localhost:5000/notes')
  .then(response => {
    const list = document.querySelector('.notes')

    list.innerHTML = response.data.data.map(ele => `<li>${ele.content}`).join('\n')

  })
}

init()