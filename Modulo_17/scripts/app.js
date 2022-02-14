
import {initializeApp, getAuth, getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.6'
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase/app';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase/auth';
// import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase/firestore';
  

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBGtkrQ6bRSO6AJSBmkIGyCkQLMmUQB0n8",
    authDomain: "college-20690.firebaseapp.com",
    databaseURL: "https://college-20690-default-rtdb.firebaseio.com",
    projectId: "college-20690",
    storageBucket: "college-20690.appspot.com",
    messagingSenderId: "569202790025",
    appId: "1:569202790025:web:0ec79e239afa803b9e0058",
    measurementId: "G-LY2Z0PDE0B"
  });

// const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs()
const todosCol = collection(db, 'todos')
const snapshot = await getDocs(todosCol)

auth.onAuthStateChanged(user => {

})

onAuthStateChanged (auth, user => {
    if (user !== null) {
        console.log('logged in!')
    }else {
        console.log('No user')
    }
})

// db.collection("turmaA").get()
//                         .then((snapshot) => {
//                             snapshot.foreEach((doc) => {
//                                 console.log(doc)
//                             })
//                         })