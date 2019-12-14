import { firestoreAction } from 'vuexfire'
import { db } from './db'

export const state = () => ({
  list: []
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('list', db.collection('todo'))
  }),
  add: firestoreAction((context, task) => {
    return db.collection('todo').add(task)
  })
}
