//index.js
import React,{ Component } from 'react';
import { render } from 'react-dom';
import './css/com.css';
import './css/reset.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducers,
    applyMiddleware(thunkMiddleware)
);
import Main from './pages/Main';
class App extends Component{
    render(){
        return (
            <div className="app">
                <Provider store={store}>
                    <Main />
                </Provider>
            </div>
        )
    }
}
render(<App />,document.getElementById('root'));