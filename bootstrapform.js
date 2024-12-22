const handleclick = () => {
    // Get values from the input fields
    let name = document.getElementById('floatingInput').value;
    let email = document.getElementById('floatingInputGrid').value;
    let username = document.getElementById('floatingUsername').value;
    let password = document.getElementById('floatingPassword').value;
    let address = document.getElementById('floatingAddress').value;
    let number = document.getElementById('floatingNumber').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    const sp_char = [
        "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
        ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", 
        "}", "~", "©", "®", "™", "§", "¶", "•", "∞", "°", "±", "≠", "≈", "∑", "√", "π",
        "÷", "←", "↑", "→", "↓", "♠", "♥", "♦", "♣", "♪", "♫", "☀", "☁", "★", "☆",
        "☂", "☃"];
      
    // Check if all mandatory fields are filled
    if (name && email && username && password && address && number && gender) {
        if (email.includes('@gmail.com')) {
        }
        else {
            alert("Please enter a valid email (must be a Gmail address).");
        }
        if (sp_char.some(char => password.includes(char))) {
        } 
        else {
            alert("Please use special characters for password.");
        }
        if (number.toString().length == 10) {
            alert("Form submitted successfully!! ")
        } 
        else {
            alert("Enter number carefully.");
        }
    }
    else {
    alert("Missing mandatory fields");
    }
};
