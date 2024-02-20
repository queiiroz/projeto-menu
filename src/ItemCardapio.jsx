import { enroladinhoMignon } from "./cardapio.js";

export function ItemCardapio() {
  return (
    <div className="container-item-cardapio">
      <div>
        <h2>{enroladinhoMignon.nome}</h2>
        <p>{enroladinhoMignon.preco}</p>
        <p>{enroladinhoMignon.descricao}</p>
      </div>
      <img src={enroladinhoMignon.imagem} alt="" />
    </div>
  );
}
