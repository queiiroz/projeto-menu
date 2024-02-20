import Hashtaurante from "./assets/hashtaurante.webp";
import "./App.css";
import { Navegacao } from "./Navegacao.jsx";
import { ItemCardapio } from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio.js";

export function App() {
  return (
    <>
      <img src={Hashtaurante} alt="" className="capa" />
      <Navegacao />
      <div className="menu">
        {pratosPrincipais.map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
