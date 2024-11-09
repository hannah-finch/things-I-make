import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Outlet } from "react-router-dom";

import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
