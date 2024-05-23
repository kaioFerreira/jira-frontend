import { Link } from "react-router-dom";

export function NoMatch() {
  return (
    <>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Clique para voltar a Home</Link>
    </>
  );
}