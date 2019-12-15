import { firestoreAction } from 'vuexfire'
import firebase from 'firebase'
import { db } from './db'

export const state = () => ({
  list: [],
  globalList: []
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
  bindGlobal: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'globalList',
      db.collectionGroup('tasks').where('done', '==', true)
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
  }),
  updateNice: firestoreAction(({ state }, { taskId, nice }) => {
    return db
      .collection('todo')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const docRef = doc.ref
          doc.ref
            .collection('tasks')
            .doc(taskId)
            .get()
            .then((doc) => {
              if (doc.exists) {
                docRef
                  .collection('tasks')
                  .doc(doc.id)
                  .update({ nice })
              }
            })
        })
      })
  })
}
