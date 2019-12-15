import { firestoreAction } from 'vuexfire'
import { db } from './db'

export const state = () => ({
  user: {},
  trophies: []
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'user',
      db.collection('users').doc('GR5uXTI3WbfDw9IqVah50k0FTv92')
    )
  }),
  trophybind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'trophies',
      db
        .collection('users')
        .doc('GR5uXTI3WbfDw9IqVah50k0FTv92')
        .collection('acquired-trophies')
    )
  })
}
