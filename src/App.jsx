import { Outlet } from 'react-router-dom';
import UpperHeader from './components/UpperHeader';
import MainHeader from './components/MainHeader';
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
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Glass Fusion Company. All rights reserved.
      </footer>
    </>
  );
}

export default App;
