
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-food-spice text-2xl font-display font-bold">NigerianMeals</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-food-spice transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-food-spice transition-colors">
            About
          </Link>
        </div>
        
        <Button asChild variant="outline" className="border-food-spice text-food-spice hover:bg-food-spice hover:text-white">
          <Link to="/meal-plan">
            My Meal Plan
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
