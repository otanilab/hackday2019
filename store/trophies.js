import { firestoreAction } from 'vuexfire'
import { db } from './db'

export const state = () => ({
  list: []
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('list', db.collection('trophies'))
  })
}
