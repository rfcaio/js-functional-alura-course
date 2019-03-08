
import './helpers/array'
import { log } from './helpers/promise'
import { NoteService } from './note/service'

document.querySelector('button').addEventListener('click', () => {
  NoteService.sumValuesByCode('2143')
    .then(log)
    .catch(log)
})
