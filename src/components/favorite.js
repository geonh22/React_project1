import React from 'react';
import './favorite.css';

const Favorite = ({form, children}) => {
  return (
    <main className="favorite-list-template">
      <div className="title">
        오늘 할 일
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