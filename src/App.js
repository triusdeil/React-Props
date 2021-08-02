import React from "react";
import Saludo from "./component/Saludo";
import Comentario from "./component/Comentario";
export default function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona="Luis" edad={30} />
      <Saludo persona="Gio" edad={31} />
      <Saludo persona="Edward" edad={32} />
      <hr />
      <h3>Cajita de comentario</h3>
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Luis"
        comentario="eeeeeeeeeeeeeeeee"
      />
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Gio"
        comentario="fffffffffffffffffff"
      />
      <Comentario
        urlImagen="https://picsum.photos/64"
        persona="Edward"
        comentario="ddddddddddddddd"
      />
    </div>
  );
}
