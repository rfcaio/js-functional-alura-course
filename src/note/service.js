
import { partialize, pipe } from '../helpers/operators'
import { handleStatus } from '../helpers/promise'

const filterItemsByCode = (code, notes) => notes.filter(note => note.code === code)

const getNotesItems = notes => notes._flatMap(note => note.items)

const sumItemsValue = notes => notes.reduce((total, { value }) => total + value, 0)

export const NoteService = {
  listAll () {
    return fetch('/notes')
      .then(handleStatus)
      .catch(error => {
        console.error(error)
        /* eslint-disable-next-line prefer-promise-reject-errors */
        return Promise.reject('Could not load notes.')
      })
  },

  sumValuesByCode (code) {
    const filterItems = partialize(filterItemsByCode, code)
    const sumItems = pipe(getNotesItems, filterItems, sumItemsValue)
    return this.listAll().then(sumItems)
  }
}
