
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-food-cream">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-food-spice mb-4">
            About NigerianMeals
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Bringing the rich culinary traditions of Nigeria to your weekly meal planning.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-food-spice mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At NigerianMeals, we're passionate about celebrating the diverse culinary heritage of Nigeria while promoting healthy eating habits tailored to individual needs.
              </p>
              <p className="text-gray-700">
                Our mission is to make Nigerian cuisine accessible, nutritionally balanced, and personalized for everyone. We believe that food is not just sustenance but a cultural experience that brings people together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-display font-bold text-food-spice mb-4">Nigerian Food Culture</h2>
              <p className="text-gray-700 mb-4">
                Nigeria is home to over 250 ethnic groups, each with their own unique culinary traditions. The three largest groups - Yoruba, Igbo, and Hausa - have developed distinctive cooking styles and signature dishes that reflect their history, geography, and cultural values.
              </p>
              <p className="text-gray-700">
                From the spicy jollof rice and pounded yam of the Yorubas to the hearty oha soup of the Igbos and the delicious tuwo shinkafa of the Hausas, our app highlights the best of what each tradition has to offer.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-food-spice mb-8 text-center">How Our Meal Planning Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-food-spice">Personalized Approach</CardTitle>
                <CardDescription>Tailored to your specific needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  By considering your tribe, age, weight, and height, we create meal plans that not only satisfy your cultural preferences but also meet your nutritional requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-food-spice">Nutritional Balance</CardTitle>
                <CardDescription>Health-conscious meal planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Each meal is carefully balanced to provide the right mix of proteins, carbohydrates, healthy fats, vitamins, and minerals, ensuring that you get everything your body needs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-food-spice">Cultural Authenticity</CardTitle>
                <CardDescription>True to Nigerian traditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We take pride in preserving the authenticity of traditional Nigerian dishes while making them accessible for everyday cooking and modern lifestyles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-food-spice mb-8 text-center">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-food-spice/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-food-spice">AS</span>
              </div>
              <h3 className="text-xl font-display font-bold text-food-spice">Adewale Sanni</h3>
              <p className="text-gray-700">Nutritionist & Yoruba Food Expert</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-food-igbo/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-food-igbo">CN</span>
              </div>
              <h3 className="text-xl font-display font-bold text-food-igbo">Chioma Nwosu</h3>
              <p className="text-gray-700">Dietitian & Igbo Cuisine Specialist</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 rounded-full bg-food-hausa/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-food-hausa">IM</span>
              </div>
              <h3 className="text-xl font-display font-bold text-food-hausa">Ibrahim Musa</h3>
              <p className="text-gray-700">Chef & Hausa Food Connoisseur</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
