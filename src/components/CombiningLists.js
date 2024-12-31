function CombiningLists() {
    // Define two lists, list1 and list2, each containing objects with 'positions' and 'values'
    const list1 = [
      { positions: [1, 3], values: ['A', 'B'] }, // List 1: Positions 1 and 3, with corresponding values 'A' and 'B'
      { positions: [5, 7], values: ['C', 'D'] }  // List 1: Positions 5 and 7, with corresponding values 'C' and 'D'
    ];
    const list2 = [
      { positions: [2, 4], values: ['E', 'F'] }, // List 2: Positions 2 and 4, with corresponding values 'E' and 'F'
      { positions: [6, 8], values: ['G', 'H'] }  // List 2: Positions 6 and 8, with corresponding values 'G' and 'H'
    ];
  
    // Combine both lists (list1 and list2) into a new array and sort the combined list by the first value of the 'positions' array
    const combined = [...list1, ...list2] // Spread syntax is used to combine both lists
      .sort((a, b) => a.positions[0] - b.positions[0]); // Sort by the first position in each object (ascending order)
  
    return (
      <div className="text-lg text-gray-700">
        {/* Display the combined list inside a div, with some styling */}
        <h4 className="font-semibold text-gray-800 mb-4">Combined Lists:</h4>
        
        {/* Use <pre> to preserve formatting and display the combined list in a readable way */}
        <pre className="bg-gray-100 p-4 rounded-lg">{JSON.stringify(combined, null, 2)}</pre>
      </div>
    );
  }
  
  export default CombiningLists;
