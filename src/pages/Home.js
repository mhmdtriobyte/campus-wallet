import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="text-center py-20 bg-gradient-to-r from-green-500 to-green-700 text-white">
        <h1 className="text-4xl font-bold fade-in">CampusWallet</h1>
        <p className="mt-4 text-lg fade-in-delay-1">Track your student budget the easy way</p>
        <Link to="/expenses" className="mt-6 inline-block bg-white text-green-600 px-6 py-2 rounded font-bold fade-in-delay-2">
          Get Started
        </Link>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4 fade-in">
        <h2 className="text-2xl font-bold text-center mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow text-center border-l-4 border-green-500 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">Add Expenses</h3>
            <p className="text-gray-600 mt-2">Quickly log what you spend every day</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center border-l-4 border-green-500 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">Set a Budget</h3>
            <p className="text-gray-600 mt-2">Set a monthly budget and stay on track</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center border-l-4 border-green-500 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">View Summary</h3>
            <p className="text-gray-600 mt-2">See where your money goes at a glance</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4 fade-in-delay-1">
        <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h3 className="font-bold mt-3">Set Your Budget</h3>
            <p className="text-gray-600 mt-1">Enter your monthly budget to get started</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h3 className="font-bold mt-3">Log Expenses</h3>
            <p className="text-gray-600 mt-1">Add your daily expenses with a name and amount</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h3 className="font-bold mt-3">Stay On Track</h3>
            <p className="text-gray-600 mt-1">Check your remaining budget and adjust your spending</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4 fade-in-delay-2">
        <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
        <FaqItem
          question="Is CampusWallet free?"
          answer="Yes, it is completely free to use."
        />
        <FaqItem
          question="Does it save my data?"
          answer="Currently the data is stored in your browser session. If you refresh the page, the data will reset."
        />
        <FaqItem
          question="Can I use it on my phone?"
          answer="Yes, the app is fully responsive and works on any device."
        />
        <FaqItem
          question="Who is this app for?"
          answer="It is made for university students who want a simple way to track their spending."
        />
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-bold flex justify-between items-center"
      >
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && (
        <p className="px-4 pb-4 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

export default Home;
