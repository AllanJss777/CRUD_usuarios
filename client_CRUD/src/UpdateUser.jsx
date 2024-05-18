import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  console.log({ id });
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log("getUser", result);
        setNome(result.data.nome);
        setEmail(result.data.email);
        setIdade(result.data.idade);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { nome, email, idade })
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
          <h2>Editar Usuário</h2>
          <div className="mb-2">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Digite o Nome"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite o Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Idade</label>
            <input
              type="text"
              placeholder="Digite a Idade"
              className="form-control"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <button className="btn btn-success me-2">Editar</button>
          <button onClick={handleGoBack} className="btn btn-warning">
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
