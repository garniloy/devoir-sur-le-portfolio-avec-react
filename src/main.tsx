
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
);
