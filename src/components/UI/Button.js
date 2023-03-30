import React from 'react';

const Button = ({title, ...attributes}) => {
    return (
        <button className='text-secondary py-2 px-10 rounded-full bg-primary font-semibold' {...attributes}>
            {title}
        </button>
    );
};

export default Button;