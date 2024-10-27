import React from 'react';

const ListItem = ({ title, link }) => {
    return (
        <a href={link}>
            <span>{title}</span>
        </a>
    );
};

export default ListItem;
