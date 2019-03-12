
import './helpers/array'
import { debounceTime, partialize, pipe, takeUntil } from './helpers/operators'
import { log, retry, timeout } from './helpers/promise'
import { NoteService } from './note/service'

let action = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
)

let clickAction = action(() => {
  retry(5, 5000, () => timeout(500, NoteService.sumValuesByCode('2143')))
    .then(log)
    .catch(log)
})

document.querySelector('button').addEventListener('click', clickAction)
