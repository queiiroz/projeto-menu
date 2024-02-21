import { useState } from "react";
import "./App.css";
import { Navegacao } from "./Navegacao.jsx";
import { ItemCardapio } from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio.js";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <h1 className="capa">FOOD <span>MENU</span></h1>
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
      <footer className="footer">
        Feito por{" "}
        <a href="https://github.com/queiiroz" target="_blank">
          Gleidson Queiroz 💻
        </a>
      </footer>
    </>
  );
}
