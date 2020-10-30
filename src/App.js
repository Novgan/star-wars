import { Route } from 'react-router-dom';
import './App.css';
import CardContainer from './components/Card/CardContainer';
import Planet from './components/Planet/Planet';

const App = () => {
  return (
    <>
      <Route exact path="/" render={() => <CardContainer />} />
      <Route path="/planet/:id" render={() => <Planet />} />
    </>
  );
}

export default App;
