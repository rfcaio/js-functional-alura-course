
import { handleStatus } from './helpers/promise'

document.querySelector('button').addEventListener('click', () => {
  fetch('/notes')
    .then(handleStatus)
    .then(notes => console.log(notes))
    .catch(console.log)
})
