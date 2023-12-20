const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://helloanuj:helloanuj12345@cluster.gnr9kyw.mongodb.net/Startup?retryWrites=true&w=majority";
// Set up CORS middleware before API routes
app.use(
	cors({
		origin: "https://vercel.com/droid-anuj/startup-directory-ziit/GJYDETnVeqLjXgWcZkkvkNCT4Hnr",
	})
);

app.use(express.json());
app.use("/api", apiRoutes);
// Use the environment variable for MongoDB URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`MongoDB connected to database: ${mongoose.connection.db.databaseName}`);
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
