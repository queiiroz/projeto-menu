
export function ItemCardapio(props) {
  return (
    <div className="container-item-cardapio">
      <div>
        <h2>{props.nome}</h2>
        <p className="preco">{props.preco}</p>
        <p>{props.descricao}</p>
      </div>
      <img src={props.imagem} alt="" />
    </div>
  );
}
  