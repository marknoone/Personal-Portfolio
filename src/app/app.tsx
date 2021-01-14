import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const App:React.FunctionComponent = () => {
  return (
      <div className="container-fluid justify-content-center">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <FontAwesomeIcon icon={faCoffee} />
          </a>
      </div>
  );
}

export default App;
