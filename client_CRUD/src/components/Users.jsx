import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="d-flex justify-content-between mb-3">
          <h2>Lista de Usuários</h2>
          <Link to="/create" className="btn btn-success">
            Adicionar +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "35%" }}>Nome</th>
              <th style={{ width: "35%" }}>Email</th>
              <th>Idade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              // console.log({ user });
              return (
                <tr key={index}>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.idade}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success me-2"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
