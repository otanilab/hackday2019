import { firestoreAction } from 'vuexfire'
import firebase from 'firebase'
import { db } from './db'

export const state = () => ({
  list: []
})

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'list',
      db
        .collection('todo')
        .doc('Qsp1cuGSD4TSYQ5tXWX3dLIck522')
        .collection('tasks')
    )
  }),
  add: firestoreAction((context, task) => {
    return db
      .collection('todo')
      .doc('Qsp1cuGSD4TSYQ5tXWX3dLIck522')
      .collection('tasks')
      .add({
        ...task,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }),
  updateDone: firestoreAction((context, { taskId, done }) => {
    return db
      .collection('todo')
      .doc('Qsp1cuGSD4TSYQ5tXWX3dLIck522')
      .collection('tasks')
      .doc(taskId)
      .update({ done })
  })
}
