require("dotenv").config()
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();

// handling the cors policy
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true,
}

app.use(cors(corsOptions));

// middleware
// It's important to place this before any routes that need to handle JSON data in the request body.
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

// lets define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port no. ${PORT}`);
    });
});
