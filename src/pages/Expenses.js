import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState(500);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAmount, setEditAmount] = useState('');

  const addExpense = () => {
    if (name === '' || amount === '') {
      alert('Please fill in both fields');
      return;
    }
    const duplicate = expenses.some((item) => item.name.toLowerCase() === name.toLowerCase());
    if (duplicate) {
      alert('An expense with this name already exists');
      return;
    }
    const newExpense = { name: name, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount('');
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditName(expenses[index].name);
    setEditAmount(expenses[index].amount);
  };

  const saveEdit = () => {
    if (editName === '' || editAmount === '') {
      alert('Please fill in both fields');
      return;
    }
    const duplicate = expenses.some((item, i) => item.name.toLowerCase() === editName.toLowerCase() && i !== editIndex);
    if (duplicate) {
      alert('An expense with this name already exists');
      return;
    }
    const updated = [...expenses];
    updated[editIndex] = { name: editName, amount: parseFloat(editAmount) };
    setExpenses(updated);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  const deleteExpense = (index) => {
    const updated = expenses.filter((item, i) => i !== index);
    setExpenses(updated);
  };

  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = budget - totalSpent;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Expenses</h1>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold mb-2">Monthly Budget</h2>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold mb-2">Add Expense</h2>
          <input
            type="text"
            placeholder="Expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={addExpense}
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Add
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold mb-2">Summary</h2>
          <p>Budget: <span className="font-bold">${budget}</span></p>
          <p>Spent: <span className="font-bold text-red-500">${totalSpent.toFixed(2)}</span></p>
          <p>Remaining: <span className={"font-bold " + (remaining >= 0 ? "text-green-600" : "text-red-500")}>${remaining.toFixed(2)}</span></p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Expense List</h2>
          {expenses.length === 0 ? (
            <p className="text-gray-400">No expenses yet</p>
          ) : (
            <ul>
              {expenses.map((item, index) => (
                <li key={index} className="border-b py-2">
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-red-500">${item.amount.toFixed(2)}</span>
                      <button
                        onClick={() => startEdit(index)}
                        className="text-blue-400 hover:text-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteExpense(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {editIndex === index && (
                    <div className="mt-2 bg-gray-100 p-3 rounded">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                      />
                      <input
                        type="number"
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        className="border p-2 rounded w-full mb-2"
                      />
                      <div className="flex gap-2">
                        <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-1 rounded">Save</button>
                        <button onClick={cancelEdit} className="bg-gray-400 text-white px-4 py-1 rounded">Cancel</button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
