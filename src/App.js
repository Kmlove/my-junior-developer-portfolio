import MainPage from './components/MainPage';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';

function App() {

  // Add this in a useEffect on the target page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div id="app">
      <MainPage />
      <ToastContainer theme='colored' autoClose={5000} transition={Bounce}></ToastContainer>
    </div>
  );
}

export default App;
