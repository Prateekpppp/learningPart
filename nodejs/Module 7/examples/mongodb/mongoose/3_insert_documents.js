const mongoose = require('mongoose');

async function insertData() {
    try {
        await mongoose.connect('mongodb://localhost:27017/school', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            subjects: Array
        });
        
        const StudentModel = mongoose.model('Student', studentSchema);

        const teacherSchema = new mongoose.Schema({
            name: String,
            age: Number,
            experience: String
        });
        
        const TeacherModel = mongoose.model('Teacher', teacherSchema);

        await StudentModel.insertMany([
            { name: 'Abdul', age: 20, subjects: ['English','Math','Science','Social'] },
            { name: 'Manoj', age: 21, subjects: ['English','Math','Science','Social'] },
            { name: 'Ramya', age: 15, subjects: ['English','Math','Science','Social'] }
        ]);

        await TeacherModel.insertOne({ name: 'Vikram', age: 32, experience: "9 years" })
    } catch (error) {
        console.error(error);
    } finally {
            await mongoose.disconnect();
    }
}

insertData();
