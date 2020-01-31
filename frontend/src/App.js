import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Barrita from './NavBar/NavBar';
import Question from './Question/Question';
import Questions from './Questions/Questions';

class App extends Component {
  render() {
    return (
      <div>
        <Barrita />
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
      </div>
    );
  }
}

export default App;







