import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        {submitted ? (
          <p className="text-green-600 text-center text-lg font-bold">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <div className="mb-4">
              <label className="block font-bold mb-1">Name</label>
              <input type="text" required className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Email</label>
              <input type="email" required className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Message</label>
              <textarea required rows="4" className="border p-2 rounded w-full"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
