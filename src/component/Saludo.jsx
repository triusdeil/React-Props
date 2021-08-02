import React from "react";

export default function Saludo({ persona, edad }) {
  return (
    <div className="">
      <h2>
        Saludando a {persona}, su edad es {edad}
      </h2>
    </div>
  );
}
