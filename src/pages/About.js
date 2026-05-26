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
        <h2 className="text-2xl font-bold mt-10 mb-4">Tech Stack</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center border-l-4 border-green-500">
            <h3 className="font-bold text-lg">ReactJS</h3>
            <p className="text-gray-600 mt-1">Frontend library for building the UI with reusable components</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center border-l-4 border-blue-500">
            <h3 className="font-bold text-lg">Tailwind CSS</h3>
            <p className="text-gray-600 mt-1">Utility-first CSS framework for fast and responsive styling</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center border-l-4 border-purple-500">
            <h3 className="font-bold text-lg">React Router</h3>
            <p className="text-gray-600 mt-1">Handles navigation between pages without reloading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
