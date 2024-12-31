import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import adminRouter from "./features/admin/Routers/adminRoutes.js";
import clientRouter from "./features/client/routes/clientRoutes.js";
import connectDb from "./config/mongoDb.js";

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/skillup/api/admin", adminRouter);
app.use("/skillup/api/client", clientRouter);
// Define a simple route

// Start the server
app.listen(port, async () => {
  try {
    await connectDb();
    console.log(`Server is running on http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
});

export default app;
