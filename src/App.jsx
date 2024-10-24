import { Outlet } from 'react-router-dom';
import UpperHeader from './components/UpperHeader';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* Upper Header */}
      <UpperHeader />

      {/* Main Header */}
      <MainHeader />

    
      {/* Dynamic content */}
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer/>

      {/* <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Glass Fusion Company. All rights reserved. Designed and Developed by 8701DevOps
      </footer> */}
    </>
  );
}

export default App;
