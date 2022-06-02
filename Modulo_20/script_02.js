
const firebaseConfig = {
    apiKey: "AIzaSyCTPsdDe8MToPc4pQhSzE6MYfc6L8cjDzI",
    authDomain: "programadorbr-d5939.firebaseapp.com",
    projectId: "programadorbr-d5939",
    storageBucket: "programadorbr-d5939.appspot.com",
    messagingSenderId: "130348662827",
    appId: "1:130348662827:web:4fd5b93fb8c6cac3ddaa6e",
    measurementId: "G-D8FMJMQJFZ"
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

const ref = storage.ref("/imagens")

ref.parent.child("Fatorial.png").getDownloadURL().then(url => { console.log(url)})

// const fileRef = ref.child("IA_new.png")

// fileRef.getDownloadURL().then(url => { console.log(url)})

// const fileParent = fileRef.parent.parent
// fileParent.listAll().then(res => {console.log(res)})