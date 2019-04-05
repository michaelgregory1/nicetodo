createTask()
clearCompleted ()
clearToDo ()

const toDoList = document.getElementById('toDoList')
const completedList = document.getElementById('completedList')

function createTask () {

  const button = document.querySelector('.create-button')

  document.querySelector('input').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {

      let inputValue = document.getElementById('input').value

      if (inputValue != '')
        createNewTask(inputValue)

    }
  })

  button.addEventListener('click', () => {

    let inputValue = document.getElementById('input').value

    if (inputValue != '')
      createNewTask(inputValue)

  })
}

function createNewTask (value) {

  document.getElementById('input').value = ''

  let li = document.createElement("li")
  const text = document.createElement('h3')
  text.innerText = value
  text.setAttribute('id', 'left')

  let icon = document.createElement("i")
  icon.setAttribute("class", "far fa-trash-alt")

  let button = document.createElement("button")
  button.setAttribute("class", "delete")

  button.append(icon)

  button.addEventListener('click', (e) => {

     e.currentTarget.parentNode.remove()

  })

  let completeButton = document.createElement("button")
  completeButton.setAttribute('class', 'complete')
  completeButton.innerText = 'complete'

  li.append(text, completeButton, button)

  toDoList.append(li)

  completeButton.addEventListener('click', (e) => {

     completedList.append(e.currentTarget.parentNode)
     completeButton.style.visibility = 'hidden'

  })
}

function clearToDo (){

  $(".clearToDo").click(function() {

    $(toDoList).children().fadeOut('slow', function() {
        $(toDoList).children().remove();
    })
  });
}

function clearCompleted (){

  $(".clearCompleted").click(function() {

    $(completedList).children().fadeOut('slow', function() {
        $(completedList).children().remove();
    })
  });
}
