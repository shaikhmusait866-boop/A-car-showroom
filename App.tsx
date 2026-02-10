
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ModelsGrid } from './components/ModelsGrid';
import { CarDetails } from './components/CarDetails';
import { BookingForm } from './components/BookingForm';
import { EMICalculator } from './components/EMICalculator';
import { ComparisonTool } from './components/ComparisonTool';
import { ContactUs } from './components/ContactUs';
import { AuthModal } from './components/AuthModal';
import { AIAssistant } from './components/AIAssistant';
import { Car } from './types';
import { ALL_CARS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    // Handle hash routing
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('car/')) {
        const carId = hash.split('/')[1];
        const car = ALL_CARS.find(c => c.id === carId);
        if (car) {
          setSelectedCar(car);
          setCurrentPage('details');
        }
      } else if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => navigateTo('models')} />
            <div className="container mx-auto px-4 py-20">
              <h2 className="text-4xl font-extrabold mb-12 text-center gradient-text uppercase tracking-tighter">
                Our Premium Fleet
              </h2>
              <ModelsGrid cars={ALL_CARS} onCarSelect={(car) => navigateTo(`car/${car.id}`)} />
            </div>
          </>
        );
      case 'models':
        return (
          <div className="pt-24 min-h-screen container mx-auto px-4">
            <h1 className="text-5xl font-black mb-12 text-center gradient-text uppercase tracking-tighter">Explore Models</h1>
            <ModelsGrid cars={ALL_CARS} onCarSelect={(car) => navigateTo(`car/${car.id}`)} />
          </div>
        );
      case 'details':
        return selectedCar ? (
          <CarDetails 
            car={selectedCar} 
            onBook={() => navigateTo('order')}
            onBack={() => navigateTo('models')}
          />
        ) : null;
      case 'order':
        return (
          <div className="pt-24 min-h-screen">
            <BookingForm preSelectedCar={selectedCar} />
          </div>
        );
      case 'emi':
        return (
          <div className="pt-24 min-h-screen">
             <EMICalculator defaultCar={selectedCar} />
          </div>
        );
      case 'compare':
        return (
          <div className="pt-24 min-h-screen">
            <ComparisonTool />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24 min-h-screen">
            <ContactUs />
          </div>
        );
      default:
        return <Hero onExplore={() => navigateTo('models')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        onNavigate={navigateTo} 
        onAuthClick={() => setShowAuthModal(true)}
        user={user}
        onLogout={() => setUser(null)}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={(email) => {
          setUser({ email });
          setShowAuthModal(false);
        }}
      />

      <AIAssistant />
    </div>
  );
};

export default App;
