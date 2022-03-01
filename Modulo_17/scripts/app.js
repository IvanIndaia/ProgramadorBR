const firebaseConfig = {
  apiKey: "AIzaSyB66YmlgfIVVCMC0suJiUiS3nBeIkTW42o",
  authDomain: "college-336e8.firebaseapp.com",
  projectId: "college-336e8",
  storageBucket: "college-336e8.appspot.com",
  messagingSenderId: "720074246155",
  appId: "1:720074246155:web:c9c52db93e458e831e5f0e"
}

firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore()
let db = firebase.firestore()

////Lendo documentos
// //Ler os dados de uma coleção
// db.collection("turmaA").get().then((snapshot) => {
//                         snapshot.forEach((doc) => {
//                           let aluno = doc.data()
//                           console.log(aluno.nome +" "+ aluno.sobrenome +" - Nota1: "+ aluno.notas.nota1 +" Nota2: "+ aluno.notas.nota2)
//                         })
// })

// let docRef = db.collection("turmaA").doc("giV1jeQpbFiEY7VsthN8")
// docRef.get().then((doc) => {
//     console.log(doc.data().nome)
// })

//// Buscas-Selecionando melhor os documentos
// db.collection("turmaA").where("nome", "!=", "Igor").get()
//   .then(snapshot => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data()
//       console.log(aluno.nome + " " + aluno.sobrenome + " - Nota1: " + aluno.notas.nota1 + " Nota2: " + aluno.notas.nota2)
//     })
//   })


//Criando e Alterando documentos
// const TURMA = "turmaA"

// db.collection(TURMA).add({
//   nome: "Marcos",
//   sobrenome: "Santos",
//   notas: {nota1: 9.6, nota2: 7.5}
// }).then(doc => {
//   console.log("Documentos inserido com sucesso", doc)
// }).catch(err => {
//   console.log(err)
// })

// const TURMA = "turmaA"
// db.collection(TURMA).doc("AlunoNovo2").set(
//   {
//     sobrenome: "Rocha",
//   }, {merge: true}
// ).then(doc => {
//   console.log("Documentos inserido com sucesso!")
// }).catch(err => {
//       console.log(err)
// })
// -----------------------------------------------------

// const TURMA = "turmaA"
// db.collection(TURMA).doc("AlunoNovo2").update(
//   {
//     // cidadesVisitadas: firebase.firestore.FieldValue.arrayUnion("")
//     cidadesVisitadas: firebase.firestore.FieldValue.arrayRemove("")
//     // faltas: firebase.firestore.FieldValue.increment(1)
//   }
// ).then(doc => {
//   console.log("Documentos inserido com sucesso!")
// }).catch(err => {
//       console.log(err)
// })

//On Snapshot (update in real time)
// const TURMA = "turmaA"
// db.collection("turmaA").onSnapshot(snapshot => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data()
//     console.log(aluno)
//   })
// })

//Apagando campos e documentos
// const TURMA = "turmaA"
// db.collection(TURMA).doc("AlunoNovo2").delete().then(doc => {
//   console.log("Documentos inserido com sucesso!")
// }).catch(err => {
//       console.log(err)
// })

//Criando usuários no Firebase

// let auth = firebase.auth()

// let newUserEmail = "novoteste@teste.com"
// let newUserPass = "123adc"

let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPass)
//   .then(user => {
//     console.log(user)
//   }).catch(error => {
//     console.log(error)
//   })


// //Gerenciando Logins
function login() {
  let userEmail = "novoteste@teste.com"
  let userPass = "123adc"

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    auth.signInWithEmailAndPassword(userEmail, userPass)
      .then(loggedUser => {
        console.log(auth.currentUser)
        //escrever()
      }).catch(error => {
        console.log(error)
      })
  }).catch(error=>{
    console.log(error)
  })
}


// auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log(user)
//   } else {
//     console.log("Nenhum usuário logado!")
//   }
// })

function logout() {
  auth.signOut().then(() => {
    console.log("Usuário foi deslogado!!!")
  }).catch(error => {
    console.log(error)
  })
}

// setTimeout(logout, 2000)


//O que são permissões

function ler() {

  db.collection("lista").get().then(snapshot => {
    snapshot.forEach(item => {
      console.log(item.data())
    })
  }).catch(error => {
    console.log(error)
  })

}

function escrever() {
  db.collection("lista")
  .add({title:"Farinha", numero: Math.random()})
  .then(doc => {
    console.log(doc)
  })
  .catch(error => {
    console.log(error)
  })
}

// escrever()
ler()

// login()
// logout()