import React, { Component } from 'react';
import './favorite_city.css';

class FavoriteCity extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, id, onToggle, onRemove } = this.props;

    return (
      <div className="favorite-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id)}
        }>&times;</div>
        <div className={`favorite-text`}>
          <div>{text}</div>
        </div>
      </div>
    );
  }
}

export default FavoriteCity;