function MinimizingLoss({ prices }) {
    // Initialize minLoss to a very high value (Infinity) to track the smallest loss
    // Initialize buyYear and sellYear to -1, which will be updated when the correct years are found
    let minLoss = Infinity;
    let buyYear = -1;
    let sellYear = -1;
  
    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
      // Nested loop to compare the price at year 'i' with each subsequent year 'j' (i < j)
      for (let j = i + 1; j < prices.length; j++) {
        const loss = prices[i] - prices[j]; // Calculate the potential loss if bought at year 'i' and sold at year 'j'
        
        // Check if the loss is positive (i.e., selling price is lower than the buying price) and smaller than the current minLoss
        if (loss > 0 && loss < minLoss) {
          minLoss = loss; // Update minLoss to the smaller value
          buyYear = i;    // Update buyYear to the current index 'i'
          sellYear = j;   // Update sellYear to the current index 'j'
        }
      }
    }
  
    // Return the result inside JSX, displaying the minimum loss and corresponding years to buy and sell
    return (
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Minimizing Loss:</h4>
        <p className="text-lg text-gray-700">Min Loss: ₹{minLoss}</p>
        <p className="text-lg text-gray-700">Buy Year: {buyYear}</p>
        <p className="text-lg text-gray-700">Sell Year: {sellYear}</p>
      </div>
    );
  }
  
  export default MinimizingLoss;
