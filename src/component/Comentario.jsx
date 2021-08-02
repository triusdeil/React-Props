import React from "react";
import Imagen from "./Imagen";
export default function Comentario({ urlImagen, persona, comentario }) {
  return (
    <div className="media">
      <Imagen urlImagen={urlImagen} />
      <div className="media-body">
        <h5 className="mt-0">{persona}</h5>
        {comentario}
      </div>
    </div>
  );
}
