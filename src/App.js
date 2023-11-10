import { Outlet } from "react-router-dom";
import Hedder from "./Component/Home/Hedder";

function App() {
  return (
    <div>
      <Hedder />
      <Outlet />
    </div>
  );
}

export default App;
