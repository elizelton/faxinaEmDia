import React from 'react';
import InputBT from "../../../../components/form/InputBT/Index";

const Escritorio: React.FC = () => {
  return (
    <>
      <InputBT name="comodos.banheiroTrabalho" description="Banheiro Trabalho" defaultValue="1"></InputBT>
      <InputBT name="comodos.cozinhaTrabalho" description="Cozinha Trabalho" defaultValue="1"></InputBT>
      <InputBT name="comodos.salaTrabalho" description="Sala Trabalho" defaultValue="1"></InputBT>
      <InputBT
        name="comodos.comodoDiverso"
        description="Cômodo Diverso Trabalho"
        defaultValue="1"
      ></InputBT>
    </>
  );
}

export default Escritorio;