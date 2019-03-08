
import { handleStatus } from '../helpers/promise'

const filterItemsByCode = code => notes => notes.filter(note => note.code === code)

const getNotesItems = notes => notes._flatMap(note => note.items)

const sumItemsValue = notes => notes.reduce((total, { value }) => total + value, 0)

export const NoteService = {
  listAll () {
    return fetch('/notes').then(handleStatus)
  },

  sumValuesByCode (code) {
    return this.listAll().then(getNotesItems).then(filterItemsByCode(code)).then(sumItemsValue)
  }
}
