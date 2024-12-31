import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
import adminRouter from "./features/admin/Routers/adminRoutes.js";
import clientRouter from "./features/client/routes/clientRoutes.js";
import connectDb from "./config/mongoDb.js";

app.use(
  cors({
    origin: "*", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
// Middleware to parse JSON bodies
app.use(express.json());
app.use("/skillup/api/admin", adminRouter);
app.use("/skillup/api/client", clientRouter);
app.get("/", (req, res) => {
  res.json("Hello World!");
});

// Define a simple route

// Start the server
// app.listen(port, async () => {
//   try {
//     await connectDb();
//     console.log(`Server is running on http://localhost:${port}`);
//   } catch (err) {
//     console.log(err);
//   }
// });
connectDb().then(() => {
  try {
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:3000`);
    });
  } catch (error) {
    console.log(error, "database error");
  }
});

export default app;
