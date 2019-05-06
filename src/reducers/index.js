import { combineReducers } from 'redux';
import cities from './cities_reducer';
import selected from './selected_city_reducer';
import weather from './weather_reducer'
const rootReducer = combineReducers({
 cities,
 selected,
 weather
});
export default rootReducer;