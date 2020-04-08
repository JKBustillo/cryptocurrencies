import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`;

const useMoneda = (label, initialState, options) => {
    const [state, setState] = useState(initialState);
    
    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">Seleccione</option>
                { options.map( option => (
                    <option
                        key={option.codigo}
                        value={option.codigo}
                        >{option.nombre}
                    </option>
                )) }
            </Select>
        </Fragment>
    );

    return [state, Seleccionar, setState];
}
 
export default useMoneda;