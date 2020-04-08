import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;

    span {
        font-weight: bold;
    }
`;

const Info = styled.p`
    font-size: 18px;
`;

const Precio = styled.p`
    font-size: 30px;

`;

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;

    console.log(resultado);
    
    return (
        <ResultadoDiv>
            <Precio>Precio actual: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Varianza en las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired,
};

export default Cotizacion;