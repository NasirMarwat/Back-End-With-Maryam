import Express, { json } from "express";
import { connectDB } from "./db/config.js";
import dbInit from "./db/initDb.js";
import courseRouter from "./router/course/index.js";
import studentRouter from "./router/student/index.js";
import teacherRouter from "./router/teacher/index.js";
import pivotRouter from "./router/Pivot/index.js";

const app = Express();
app.use(json());

connectDB();
const port = 8000;

dbInit().then(() => {
  console.log("DB synced");
});
app.use(courseRouter);
app.use(studentRouter);
app.use(teacherRouter);
app.use(pivotRouter);
app.listen(port, () => {
  console.log("Server is running ");
});
