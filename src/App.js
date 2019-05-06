import React, { Component } from 'react';
import CityList from './containers/city-list';
import CityDetail from './containers/city-detail';
import WeatherList from './containers/weather_list';
import SearchBar from './containers/search_bar';
import Favorite from './components/favorite';
import Form from './components/form';
import FavoriteList from './components/favorite_list';
import './App.css';
class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    favorites: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: 'JSX 사용해보기', checked: true },
      { id: 2, text: '라이프 사이클 이해하기', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, favorites } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      favorites: favorites.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { favorites } = this.state;
    
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = favorites.findIndex(todo => todo.id === id);
    const selected = favorites[index]; // 선택한 객체

    const nextFavorites = [...favorites]; // 배열을 복사
    
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextFavorites[index] = { 
      ...selected, 
      checked: !selected.checked
    };

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
      // handleToggle,
      handleRemove
    } = this;
 return (

 <div className='App row'>
 <div className="col-4">
 <CityList/>
 <CityDetail/>
 <WeatherList/>
 <SearchBar/>

 <Favorite form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <FavoriteList favorites={favorites} onToggle={handleToggle} onRemove={handleRemove}/>
      </Favorite>
 </div>
 </div>
 );
 }
}
export default App;