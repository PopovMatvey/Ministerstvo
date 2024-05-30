import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainContent } from '../MainContent';
import './css/style.css';

/**
 * Приложениеы
 * @returns компонент "Приложение"
 */
function App() {


  return (
    <>
      <Header />
      
      <MainContent />
      {/* <Footer /> */}
    </>
  );
}

export default App;
