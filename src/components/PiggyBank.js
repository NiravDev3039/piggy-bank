import React from 'react';

function PiggyBank({ balance, addMoney, breakPiggyBank, isBroken, resetPiggyBank }) {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl space-y-6">
      {/* Piggy Bank Title */}
      <h2 className="text-3xl font-semibold text-center text-gray-800">Piggy Bank</h2>

      {/* Display the current balance in the piggy bank */}
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-blue-200 p-4 rounded-lg shadow-lg flex items-center justify-center">
          {/* Show the balance amount */}
          <h3 className="text-4xl font-bold text-gray-800">₹{balance}</h3>
        </div>
      </div>

      {/* Conditional rendering based on whether the piggy bank is broken */}
      {isBroken ? (
        <div className="text-center space-y-4">
          {/* Message when the piggy bank is broken */}
          <p className="text-red-600 text-xl">Your piggy bank is broken!</p>
          
          {/* Button to reset the piggy bank and start fresh */}
          <button
            onClick={resetPiggyBank}
            className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start New Piggy Bank
          </button>
        </div>
      ) : (
        <div className="flex justify-center space-x-6">
          {/* Buttons to add money to the piggy bank */}
          <button
            onClick={() => addMoney(100)} // Add ₹100 to the piggy bank
            className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add ₹100
          </button>
          <button
            onClick={() => addMoney(500)} // Add ₹500 to the piggy bank
            className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add ₹500
          </button>

          {/* Button to break the piggy bank */}
          <button
            onClick={breakPiggyBank}
            className="bg-red-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Break Piggy Bank
          </button>
        </div>
      )}
    </div>
  );
}

export default PiggyBank;
