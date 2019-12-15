import { firestoreAction } from 'vuexfire'
// import { db } from './db'

export const state = () => ({
  list: []
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {})
}
