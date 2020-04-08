import React from 'react';
import styled from 'styled-components';
import useMoneda from '../hooks/useMoneda';

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

const Form = () => {
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Estadounidense' },
        { codigo: 'COP', nombre: 'Peso Colombiano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ];

    const [moneda, SelectMoneda] = useMoneda('Elige tu moneda', '', MONEDAS);
    return (
        <form>
            <SelectMoneda />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Form;