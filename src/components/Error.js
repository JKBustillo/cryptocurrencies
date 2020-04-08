import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MensajeError = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default Error;