const mongoose = require('mongoose');
async function updateData() {
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
        const result = await StudentModel.updateOne(
            { name: 'Abdul' },
            { $set: { age: 100 } }
        );
    } catch (error) {
        console.error(error);
    } finally {
                    await mongoose.disconnect();
    }
}

updateData();

