const fs = require('fs'); // Use callback-based fs module

// Function to read chapter1.txt
function studyChapter1(callback) {
    console.log("Starting to study Chapter 1...");
    fs.readFile('chapter1.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading Chapter 1:", err);
            return callback(err); // Pass error to callback
        }
        console.log("Finished studying Chapter 1!");
        callback(null, data); // Pass data to next function
    });
}

// Function to write to chapter1_exam.txt
function writeExam(content, callback) {
    console.log("Starting to write the exam...");
    fs.writeFile('chapter1_exam.txt', `Exam Answers:\n${content}`, (err) => {
        if (err) {
            console.error("Error writing the exam:", err);
            return callback(err);
        }
        console.log("Exam written successfully!");
        callback(null);
    });
}

// Executing functions in sequence using callbacks
studyChapter1((err, data) => {
    if (!err) {
        writeExam(data, (err) => {
            if (err) {
                console.error("An error occurred during writing.");
            }
        });
    }
});
