const fs = require('fs').promises; // Use promise-based fs module

// Function to read chapter1.txt (returns a Promise)
function studyChapter1() {
    console.log("Starting to study Chapter 1...");
    return fs.readFile('chapter1.txt', 'utf-8')
        .then(data => {
            console.log("Finished studying Chapter 1!");
            return data; // Pass the data to the next .then()
        })
        .catch(error => console.error("Error reading Chapter 1:", error));
}

// Function to write to chapter1_exam.txt (returns a Promise)
function writeExam(content) {
    console.log("Starting to write the exam...");
    return fs.writeFile('chapter1_exam.txt', `Exam Answers:\n${content}`)
        .then(() => console.log("Exam written successfully!"))
        .catch(error => console.error("Error writing the exam:", error));
}

// Execute functions in sequence using .then()
studyChapter1()
    .then(data => {
        if (data) return writeExam(data);
    })
    .catch(error => console.error("An error occurred:", error));
