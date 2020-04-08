import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import imagen from './assets/cryptomonedas.png';
import Form from './components/Form';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect( () => {
    const cotizarCriptoMoneda = async () =>{
      if (moneda === ''){
        return;
      }

      setCargando(true);

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
      }, 1000);

    }
    cotizarCriptoMoneda();
  }, [moneda, criptoMoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagecrypto"/>
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form setMoneda={setMoneda} setCriptoMoneda={setCriptoMoneda} />
        { cargando ? <Spinner /> : <Cotizacion resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
