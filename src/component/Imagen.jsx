import React from "react";

export default function Imagen({ urlImagen }) {
  return (
    <div>
      <img src={urlImagen} className="mr-3" />
    </div>
  );
}
