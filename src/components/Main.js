import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterList from './FilterList';

import {Store} from '../reducers/index';

class Main extends Component {
    render() {
      return (
        <Provider store={Store}>
          <div>
          <FilterList/>
            <TodoForm/>
            <TodoList/>
          </div>
        </Provider>
      );
    }
  }
  
export default Main;
  