import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ExchangeRates from './ExchangeRates';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
