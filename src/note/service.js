
import Maybe from '../helpers/maybe'
import { partialize, pipe } from '../helpers/operators'
import { handleStatus } from '../helpers/promise'

const filterItemsByCode = (code, itemsMonad) => itemsMonad.map(items => {
  return items.filter(note => note.code === code)
})

const getNotesItems = notesMonad => notesMonad.map(notes => {
  return notes._flatMap(note => note.items)
})

const sumItemsValue = itemsMonad => itemsMonad.map(items => {
  return items.reduce((total, { value }) => total + value, 0)
})

export const NoteService = {
  listAll () {
    return fetch('/notes')
      .then(handleStatus)
      .then(notes => Maybe.of(notes))
      .catch(error => {
        console.error(error)
        /* eslint-disable-next-line prefer-promise-reject-errors */
        return Promise.reject('Could not load notes.')
      })
  },

  sumValuesByCode (code) {
    const filterItems = partialize(filterItemsByCode, code)
    const sumItems = pipe(getNotesItems, filterItems, sumItemsValue)
    return this.listAll().then(sumItems).then(result => result.getOrElse(0))
  }
}
