const CaesarCipher = {
    // Method to encode a message using Caesar Cipher
    encode: (message, shift) => {
      return message
        .split('') // Split the message into an array of characters
        .map((char) => { // Loop over each character in the message
          if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter (either lowercase or uppercase)
            const charCode = char.charCodeAt(0); // Get the Unicode of the character
            const offset = char.toLowerCase() === char ? 97 : 65; // If lowercase, the offset is 97 ('a'), if uppercase, it's 65 ('A')
            
            // Perform the Caesar Cipher shift: move within the alphabet (0-25 range) and wrap around using modulo 26
            return String.fromCharCode(((charCode - offset + shift) % 26) + offset); // Convert back to a character with the new shifted code
          }
          return char; // If it's not a letter, return the character as it is (e.g., punctuation, spaces)
        })
        .join(''); // Join the array of characters back into a string and return the encoded message
    },

    // Method to decode a message using Caesar Cipher (by reversing the shift)
    decode: (message, shift) => {
      // To decode, simply use the encode method with the inverse of the shift (26 - shift)
      return CaesarCipher.encode(message, 26 - shift);
    }
};

export default CaesarCipher; // Export the CaesarCipher object for use in other parts of the application
