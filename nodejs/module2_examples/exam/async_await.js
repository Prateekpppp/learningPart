const fs = require('fs').promises; // Use promise-based fs module

// Function to read chapter1.txt
async function studyChapter1() {
    try {
        console.log("Starting to study Chapter 1...");
        const data = await fs.readFile('chapter1.txt', 'utf-8');
        console.log("Finished studying Chapter 1!");
        return data; // Pass the data to next function
    } catch (error) {
        console.error("Error reading Chapter 1:", error);
    }
}

// Function to write the exam based on the chapter studied
async function writeExam(content) {
    try {
        console.log("Starting to write the exam...");
        await fs.writeFile('chapter1_exam.txt', `Exam Answers:\n${content}`);
        console.log("Exam written successfully!");
    } catch (error) {
        console.error("Error writing the exam:", error);
    }
}

// Main function to execute both tasks in sequence
async function main() {
    const chapterData = await studyChapter1(); // Read file first
    if (chapterData) {
        await writeExam(chapterData); // Write file only if reading was successful
    }
}

main();