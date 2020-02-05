import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Barrita from './NavBar/NavBar';
import Question from './Question/Question';
import Questions from './Questions/Questions';
import Callback from './Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Barrita />
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default App;







