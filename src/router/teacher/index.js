import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";

const teacherRouter = Router();
teacherRouter.post("/createTeacher", teacherController.createTeacher);
teacherRouter.get("/getOneTeacher/:id", teacherController.getOneTeacher);
teacherRouter.get("/getAllTeacher/", teacherController.getAllTeacher);
teacherRouter.put("/updateTeacher/:id", teacherController.updateTeacher);
teacherRouter.delete("/deleteTeacher/:id", teacherController.deleteTeacher);

export default teacherRouter;
