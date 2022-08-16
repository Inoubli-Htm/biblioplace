const express = require("express");
const connectDB = require("./config/connection");
const app = express();
const authRouter = require("./routes/auth");

//connect database
connectDB();

//middelware
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", require("./routes/user"));
app.use("/api/livres", require("./routes/livre"));

const port = 7000;
app.listen(port, () => console.log(`server connected on port ${port}`));
