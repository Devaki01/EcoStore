const fs = require('fs');
const path = require('path');

// Read JSON file, return parsed data or defaultValue if file doesn't exist
function readJSON(filePath, defaultValue = []) {
    try {
        if (!fs.existsSync(filePath)) return defaultValue;
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading JSON:', err);
        return defaultValue;
    }
}

// Write data as JSON to file
function writeJSON(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        return true;
    } catch (err) {
        console.error('Error writing JSON:', err);
        return false;
    }
}

module.exports = {
    readJSON,
    writeJSON,
};