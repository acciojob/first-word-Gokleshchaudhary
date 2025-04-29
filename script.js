function firstWord(s) {
    if (s.length === 0) {
        return '';
    }
    
    const spaceIndex = s.indexOf(' ');
    
    if (spaceIndex === -1) {
        return s; // Return the entire string if no space is found
    }
    
    return s.substring(0, spaceIndex); // Return the substring up to the first space
}

function showFirstWord() {
    const inputString = document.getElementById('inputString').value;
    const result = firstWord(inputString);
    document.getElementById('result').innerText = `First Word: '${result}'`;
}