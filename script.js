function showFirstWord() {
    const inputString = document.getElementById('inputString').value;
    console.log("Input String:", inputString); // Check what input is received
    const result = firstWord(inputString);
    console.log("First Word:", result); // Check what first word is returned
    document.getElementById('result').innerText = `First Word: '${result}'`;
}