export function validateSignup({ username, email, password }) {
    if (!username || !email || !password) {
        return "All fields are required.";
    }
    // Simple email format check
    if (!/\S+@\S+\.\S+/.test(email)) {
        return "Invalid email format.";
    }
    // Password length check
    if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }
    return null;
}

export function validateSignin({ email, password }) {
    if (!email || !password) {
        return "Email and password are required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return "Invalid email format.";
    }
    return null;
}