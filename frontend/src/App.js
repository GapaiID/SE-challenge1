import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider as StoreProvider } from "react-redux";
import stores from "./stores";

function App() {
  return (
    <StoreProvider store={stores}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </StoreProvider>
  );
}

export default App;
