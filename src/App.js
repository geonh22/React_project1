import React, { Component } from 'react';
import CityList from './containers/city-list';
import CityDetail from './containers/city-detail';
import SearchBar from './containers/search_bar';
import Favorite from './components/favorite/favorite';
import Form from './components/favorite/form';
import FavoriteList from './components/favorite/favorite_list';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './App.css';
class App extends Component {

  state = {
    input: '',
    favorites: [
      { id: 0, text: '강남구' },
      { id: 1, text: '서초구' },
      { id: 2, text: '제주특별자치도' },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

  handleCreate = () => {
    const { input, favorites } = this.state;
    this.setState({
      input: '',
      favorites: favorites.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { favorites } = this.state;

    const index = favorites.findIndex(todo => todo.id === id);
    const selected = favorites[index]; 

    const nextFavorites = [...favorites];


    this.setState({
      favorites: nextFavorites
    });
  }

  handleRemove = (id) => {
    const { favorites } = this.state;
    this.setState({
      favorites: favorites.filter(favorite => favorite.id !== id)
    });
  }
  render() {
    const { input, favorites } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (

      <div className='App row'>
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">
        <div className="search">
          <SearchBar />
          </div>
        </div>
        <div className="col-3">
          <CityList /></div>
        <div className="col-5">
          <CityDetail /></div>
        <div className="col-4">
          <Favorite form={(
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          )}>
            <FavoriteList favorites={favorites} onToggle={handleToggle} onRemove={handleRemove} />
          </Favorite>
        </div>
        
        <div className="col-12">
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;