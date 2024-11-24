const checkValidData = (email, password) => {
    const isEmailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   
    if(!isEmailValid) {
        return "Email is not valid";
    }
    if(!isPasswordValid) {
        return "Enter strong password";
    }
    return null;
}

export default checkValidData;