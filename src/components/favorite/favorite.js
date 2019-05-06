import React from 'react';
import './favorite.css';

const Favorite = ({form, children}) => {
  return (
    <main className="favorite-list-template">
      <div className="title">
        즐겨 찾기
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="favorites-wrapper">
        { children }
      </section>
    </main>
  );
};

export default Favorite;