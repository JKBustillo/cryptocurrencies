import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useMoneda from '../hooks/useMoneda';
import useCriptoMoneda from '../hooks/useCriptoMoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar Estadounidense' },
    { codigo: 'COP', nombre: 'Peso Colombiano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
];

const Form = () => {
    const [listaCripto, setListaCripto] = useState([]);
    const [moneda, SelectMoneda] = useMoneda('Elige tu moneda', '', MONEDAS);
    const [criptoMoneda, SelectCripto] = useCriptoMoneda('Elige tu criptomoneda', '', listaCripto);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            setListaCripto(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    return (
        <form>
            <SelectMoneda />

            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Form;