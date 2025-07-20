const mongoose = require('mongoose');
async function deleteData() {
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
        const result = await StudentModel.deleteOne({ name: 'Abdul' });
        
        await mongoose.disconnect();
}
deleteData();

