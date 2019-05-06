import React, { Component } from 'react';
import './favorite_city.css';

class FavoriteCity extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="favorite-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`favorite-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default FavoriteCity;