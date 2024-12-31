import React, { useState } from 'react'; // Importing React and useState hook
import PiggyBank from './components/PiggyBank'; // Importing PiggyBank component
import CurrencyFormatter from './components/CurrencyFormatter'; // Importing CurrencyFormatter component
import CaesarCipher from './components/CaesarCipher'; // Importing CaesarCipher component
import CombiningLists from './components/CombiningLists'; // Importing CombiningLists component
import MinimizingLoss from './components/MinimizingLoss'; // Importing MinimizingLoss component

function App() {
  // State variables for managing piggy bank balance, transaction history, and piggy bank status
  const [piggyBankBalance, setPiggyBankBalance] = useState(0); 
  const [transactions, setTransactions] = useState([]); 
  const [isBroken, setIsBroken] = useState(false);

  // Function to add money to the piggy bank and record the transaction
  const addMoneyToPiggyBank = (amount) => {
    setPiggyBankBalance(piggyBankBalance + amount); // Update balance
    setTransactions([...transactions, `Added ₹${amount}`]); // Add transaction record
  };

  // Function to break the piggy bank, withdraw the balance, and record the transaction
  const breakPiggyBank = () => {
    setTransactions([...transactions, `Broken piggy bank and withdrew ₹${piggyBankBalance}`]); // Add transaction record
    setPiggyBankBalance(0); // Set balance to zero after breaking the piggy bank
    setIsBroken(true); // Set piggy bank as broken
  };

  // Function to reset the piggy bank to a working state
  const resetPiggyBank = () => {
    setIsBroken(false); // Reset broken state
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-12">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-10">Online Piggy Bank</h1>

      {/* Piggy Bank Component: Displaying the balance, adding money, and breaking the piggy bank */}
      <PiggyBank
        balance={piggyBankBalance} // Passing balance as prop
        addMoney={addMoneyToPiggyBank} // Passing addMoney function as prop
        breakPiggyBank={breakPiggyBank} // Passing breakPiggyBank function as prop
        isBroken={isBroken} // Passing broken state as prop
        resetPiggyBank={resetPiggyBank} // Passing resetPiggyBank function as prop
      />

      {/* Transaction History: Displaying a list of all transactions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transaction History:</h2>
        <ul className="list-disc pl-6 space-y-2">
          {transactions.map((transaction, index) => (
            <li key={index} className="text-lg text-gray-700">{transaction}</li> // Display each transaction
          ))}
        </ul>
      </div>

      {/* Currency Formatter: Displaying the formatted balance */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Formatted Balance:</h3>
        <p className="text-2xl font-semibold text-green-600">{CurrencyFormatter(piggyBankBalance)}</p> {/* Displaying formatted balance */}
      </div>

      {/* Caesar Cipher: Encoding and decoding a string */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Caesar Cipher Encoding/Decoding:</h3>
        <p className="text-lg">Encoded: {CaesarCipher.encode("hello", 3)}</p> {/* Displaying encoded string */}
        <p className="text-lg">Decoded: {CaesarCipher.decode("khoor", 3)}</p> {/* Displaying decoded string */}
      </div>

      {/* Combining Lists: A component to combine multiple lists */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Combining Lists:</h3>
        <CombiningLists /> {/* Rendering the CombiningLists component */}
      </div>

      {/* Minimizing Loss: A component to minimize loss based on given prices */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800">Minimizing Loss:</h3>
        <MinimizingLoss prices={[20, 15, 7, 2, 13]} /> {/* Rendering the MinimizingLoss component with an array of prices */}
      </div>
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the app
