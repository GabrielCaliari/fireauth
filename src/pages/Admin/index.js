import { useEffect, useState } from "react"
import "./admin.css"
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConnection";
import { addDoc, collection } from "firebase/firestore";


export default function Admin() {
  const [tarefa, setTarefa] = useState('')
  const [ user, setUser]  = useState({})

  useEffect(() => {
    async function loadTarefas() {
      const userDetail = localStorage.getItem("@detailUser")
      setUser(JSON.parse(userDetail))
    }
    loadTarefas()
  })

  async function handleRegister(e){
    e.preventDefault();

    if(tarefa === ""){
      alert("Digite sua tarefa...")
      return
    }

    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefa,
      created: new Date(),
      userUid: user?.uid
    })
    .then(() => {
      setTarefa('')
    })
    .catch((erro) => {
      console.log("Erro ao registrar")
    })
  }

  async function handleLogout(){
    await signOut(auth);
  }

  return (
    <div className="admin-container">
      <h1>Minhas tarefas</h1>

      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button className="btn-register" type="submit">Registrar tarefa</button>
      </form>

      <article className="list">
        <p>Estudar JavaScript</p>
        <div>
          <button>Editar</button>
          <button className="btn-delete">Concluir</button>
        </div>
      </article>

      <button className="btn-logout" onClick={handleLogout}>Sair</button>
    </div>
  )
}
