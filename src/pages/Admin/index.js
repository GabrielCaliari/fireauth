import { useState } from "react"
import "./admin.css"
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConnection";


export default function Admin() {
  const [tarefa, setTarefa] = useState('')

  function handleRegister(e){
    e.preventDefault();
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
