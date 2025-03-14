
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-food-cream flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-display font-bold text-food-spice mb-4">404</h1>
          <h2 className="text-2xl font-display font-bold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-food-spice hover:bg-food-palm">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
