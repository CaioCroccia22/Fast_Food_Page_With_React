import AppRoutes from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Globalstyle } from "./styles";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Globalstyle />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;