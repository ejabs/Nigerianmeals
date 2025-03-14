
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-food-spice text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">NigerianMeals</h3>
            <p className="text-food-cream">
              Your personalized Nigerian meal planner based on your tribe and body metrics.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-food-cream hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/meal-plan" className="text-food-cream hover:text-white transition-colors">
                  My Meal Plan
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-food-cream hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Contact</h3>
            <p className="text-food-cream">
              Have questions or suggestions about our meal plans?
            </p>
            <p className="text-food-cream mt-2">
              Email: contact@nigerianmeals.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-food-cream mt-8 pt-6 text-center">
          <p className="text-food-cream">
            &copy; {new Date().getFullYear()} NigerianMeals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
