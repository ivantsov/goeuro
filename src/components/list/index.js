import React, {PropTypes} from 'react';

import './styles.css';

const List = ({items}) => {
    if (!items.length) {
        return <div className="empty-list">User doesn't have repos... Let's try another one!</div>;
    }

    const elements = items.map(({id, name, html_url}) => (
       <li
           key={id}
           className="list-group-item list-group-item-action item"
       >
           <a href={html_url} target="_blank">{name}</a>
       </li>
    ));

    return <ul className="list-group list">{elements}</ul>;
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired
    })).isRequired
};

export default List;
