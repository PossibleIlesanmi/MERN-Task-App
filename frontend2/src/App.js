//eslint-disable-next-line no-unused-vars
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="app">
      <div className="task-container">
      <h1>Hello Possible</h1>
        {/* <TaskList /> */}
      </div>

    </div>
  );
}

export default App;

//background - color: #00FF00;
