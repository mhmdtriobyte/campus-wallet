import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">About CampusWallet</h1>
        <p className="text-gray-700 text-lg mb-4">
          CampusWallet is a simple budget tracking app made for university students.
          It helps you keep track of your daily spending and stay within your monthly budget.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Many students struggle with managing their money during the semester.
          This app gives you a quick way to log expenses, set a budget, and see
          how much you have left.
        </p>
        <p className="text-gray-700 text-lg">
          Built with ReactJS and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
