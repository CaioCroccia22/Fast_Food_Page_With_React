import AppRoutes from "./Routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
import { Globalstyle } from "./styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Globalstyle />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;