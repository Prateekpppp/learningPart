const mongoose = require('mongoose');

async function createSchemaAndModel() {
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
        
    } finally {
        await mongoose.disconnect();
    }
}

createSchemaAndModel(); 