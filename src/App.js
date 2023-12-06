import MainPage from './components/MainPage';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div id="app">
      <MainPage />
      <ToastContainer theme='colored' autoClose={5000} transition={Bounce}></ToastContainer>
    </div>
  );
}

export default App;
