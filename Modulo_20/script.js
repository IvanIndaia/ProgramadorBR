
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

ref.listAll().then(res => {
    // console.log(res.items)
    
    // res.items[0].getDownloadURL().then(url => { 
    //     console.log(url)
    // })
    console.log(res)
    res.items[0].listAll().then(res =>{ console.log(res)})
})



/* Sem Permissão no Banco de Dados

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
*/
/* Com Permissão no Banco de Dados

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
*/