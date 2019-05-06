import React, { Component } from 'react';
import FavoriteCity from './favorite_city';

class FavoriteList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.favorites !== nextProps.favorites;
  }
  
  render() {
    const { favorites, onToggle, onRemove } = this.props;
    
    const favoriteList = favorites.map(
      ({id, text, checked}) => (
        <FavoriteCity
          id={id}
          text={text}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {favoriteList}    
      </div>
    );
  }
}

export default FavoriteList;