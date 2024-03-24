import { Router } from "express";
import studentController from "../../controller/student/index.js";

const studentRouter = Router();
studentRouter.post("/createStudent", studentController.createStudent);
studentRouter.get("/getOneStudent/:id", studentController.getOneStudent);
studentRouter.get("/getAllStudent", studentController.getAllStudent);
studentRouter.put("/updateStudent/:id", studentController.updateStudent);
studentRouter.delete("/deleteStudent/:id", studentController.deleteStudent);

export default studentRouter;
