
const bcrypt = require('bcrypt'); // Import the bcrypt library
app.post("/insertUser", async (request, response) => {
    try {
        const fullName = request.body.fullName;
        const email = request.body.email;
        const plainTextPassword = request.body.password;

        await mongoose.connect('mongodb://localhost:27017/iotdb');

        // Hash the password
        const saltRounds = 10; // You can adjust the number of salt rounds
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

        await UserModel.insertOne(
            { "fullName": fullName, "email": email, "password": hashedPassword }
        );
        response.status(201).send({ "success": true, "message": "Signup successful" });
    } catch(error){
        console.error("Signup error:", error);
        response.status(500).send({ "success": false, "message": "Internal server error" });
    } finally{
        await mongoose.disconnect();
    }
});

app.post("/login", async (request, response) => {
    try {
        const email = request.body.email;
        const plainTextPassword = request.body.password;

        await mongoose.connect('mongodb://localhost:27017/iotdb');

        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return response.status(401).send({ "success": false, "message": "Invalid credentials" });
        }

        // Compare the provided password with the stored hash
        const passwordMatch = await bcrypt.compare(plainTextPassword, user.password);

        if (passwordMatch) {
            response.status(200).send({ "success": true, "message": "Login successful" });
        } else {
            response.status(401).send({ "success": false, "message": "Invalid credentials" });
        }

    } catch (error) {
        console.error("Login error:", error);
        response.status(500).send({ "success": false, "message": "Internal server error" });
    } finally {
        await mongoose.disconnect();
    }
});
