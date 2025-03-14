
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UserForm from '@/components/UserForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (userData: any) => {
    // Store the user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    // Navigate to the meal plan page
    navigate('/meal-plan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-food-cream to-white">
      <Navbar />
      <main className="container px-4 py-12 mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-food-spice mb-4">
            Nigerian Food Timetable Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Create a personalized weekly meal plan with delicious Nigerian dishes 
            tailored to your tribe, age, weight, and height.
          </p>
        </section>

        <section className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-display font-bold text-food-spice mb-6">Get Your Personalized Meal Plan</h2>
          <UserForm onSubmit={handleFormSubmit} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
