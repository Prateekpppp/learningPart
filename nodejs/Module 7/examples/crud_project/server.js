const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    subjects: Array
});

const StudentModel = mongoose.model('Student', studentSchema);

app.get("/findStudent", async (request, response) => {
  try {
    let studentName = request.query.name

    await mongoose.connect('mongodb://localhost:27017/school', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const result = await StudentModel.find({ name: studentName }).lean();

    response.status(200).send(result)
  } catch(error){
    response.status(500).send("Something went wrong")
  } finally{
    await mongoose.disconnect();
  }

})

app.post("/insertStudent", async (request, response) => {
    try {
        const name = request.body.name;
        const age = request.body.age;
        const subjects = request.body.subjects;

        await mongoose.connect('mongodb://localhost:27017/school', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await StudentModel.insertOne(
            { "name": name, "age": age, "subjects": subjects } 
        );
        response.status(200).send("Student doc is created")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await mongoose.disconnect();  
    }

});


app.put("/updateStudentAge", async (request, response) => {
    try {
        const name = request.body.name;
        const age = request.body.age;

        await mongoose.connect('mongodb://localhost:27017/school', {
            useNewUrlParser: true, //please use latest parser
            useUnifiedTopology: true // please use latest server discovery
        });
        await StudentModel.updateOne(
            { "name": name },
            { $set: { "age": age } }
        );
        response.send("student doc is updated successfully")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await mongoose.disconnect();  
    }

});

app.delete("/deleteStudent", async (request, response) => {
    try {
        const name = request.body.name;

        await mongoose.connect('mongodb://localhost:27017/school', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await StudentModel.deleteOne({ "name": name });
        response.send("Student doc is deleted successfully")
    } catch(error){
        response.status(500).send("Something went wrong")
    } finally{
        await mongoose.disconnect();
    }

});

app.listen(3000, () => console.log(`Server running on port 3000`));


