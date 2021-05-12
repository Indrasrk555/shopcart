import {combineReducers} from 'redux';
 import Cartreducers from '../Reducers/CartReducers';
import AuthReducers from './Authreduces';
import Productreducer from '../Reducers/Productreducer'

const rootReducer=combineReducers(
{
	authData:AuthReducers,
	Productdata:Productreducer,
	cartData: Cartreducers
}
)

export default rootReducer;