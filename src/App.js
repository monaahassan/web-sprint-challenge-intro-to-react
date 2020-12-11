import React from "react";
import Character from './components/Character';
import { Route} from 'react-router-dom';
import CharacterInfo from './components/CharacterInfo';
import './App.css';

// const App = () => {

//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   // Fetch characters from the API in an effect hook. Remember, anytime you have a 
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">Rick & Morty Characters</h1>
//     </div>
//   );
}
export default function App() {
  return (
    <main>
      <Route path='/character' component={Character} />
    </main>
  )
};
