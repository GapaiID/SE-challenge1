import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider as StoreProvider } from "react-redux";
import stores from "./stores";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <StoreProvider store={stores}>
      <ChakraProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
