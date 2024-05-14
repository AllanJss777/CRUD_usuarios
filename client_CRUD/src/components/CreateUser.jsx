import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { nome, email, idade })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Adicionar Usuário</h2>
          <div className="mb-2">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Digite o Nome"
              className="form-control"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite o Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Idade</label>
            <input
              type="text"
              placeholder="Digite a Idade"
              className="form-control"
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <button className="btn btn-success me-2">Enviar</button>
          <button onClick={handleGoBack} className="btn btn-warning">
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
