import React from 'react';
import InputBT from "../../../../components/form/InputBT/Index";

export default function Casa() {
  return (
    <>
      <InputBT name="comodos.quarto" description="Quarto" defaultValue="1"></InputBT>
      <InputBT name="comodos.cozinha" description="Cozinha" defaultValue="1"></InputBT>
      <InputBT name="comodos.sala" description="Sala" defaultValue="1"></InputBT>
      <InputBT
        name="comodos.comodoDiverso"
        description="Cômodo Diverso"
        defaultValue="1"
      ></InputBT>
      <InputBT
        name="comodos.lavanderia"
        description="Lavanderia"
        defaultValue="1"
      ></InputBT>
      <InputBT
        name="comodos.banheiro"
        description="banheiro"
        defaultValue="1"
      ></InputBT>
    </>
  );
}
