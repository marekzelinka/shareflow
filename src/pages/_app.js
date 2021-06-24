import { ChakraProvider } from "@chakra-ui/react";

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
