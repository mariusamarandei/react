import React from 'react';
import './App.css';
import { ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//components
import Airlines from './components/Airlines'

//apollo client setup
// we create this client to specifiy that we are making requests to this end point
const client = new ApolloClient({
  uri: 'https://semesterprojectsix.ey.r.appspot.com ',
});

//the apollo provider enables us to get the data from the end point and inject it into what is inside of the apollo provider 
//it takes the data from apollo, when it receives it and it's injecting it into our application, inside the div

function App() {
  return (
    <ApolloProvider client = {client}>
    <div className="App">
      <h2> Apollo </h2>
      <Airlines/>
    </div>
    </ApolloProvider>
    );
}

export default App;
