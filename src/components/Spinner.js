import React from 'react';
import spinner from '../assets/spinner.gif';

export const Spinner = () => (
    <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
    />
);
