import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-20 bg-green-500 text-white">
        <h1 className="text-4xl font-bold">CampusWallet</h1>
        <p className="mt-4 text-lg">Track your student budget the easy way</p>
        <Link to="/expenses" className="mt-6 inline-block bg-white text-green-600 px-6 py-2 rounded font-bold">
          Get Started
        </Link>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-bold text-lg">Add Expenses</h3>
            <p className="text-gray-600 mt-2">Quickly log what you spend every day</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-bold text-lg">Set a Budget</h3>
            <p className="text-gray-600 mt-2">Set a monthly budget and stay on track</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-bold text-lg">View Summary</h3>
            <p className="text-gray-600 mt-2">See where your money goes at a glance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
