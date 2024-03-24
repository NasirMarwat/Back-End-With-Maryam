import { Router } from "express";
import pivotController from "../../controller/pivotController/index.js";

const pivotRouter = Router();

pivotRouter.post("/createPivot", pivotController.createPivot);
pivotRouter.get("/getTeacher/:TeacherId", pivotController.getTeacherData);
pivotRouter.get("/getCourse/:CourseId", pivotController.getCourse);
pivotRouter.get("/getStudent/:studentId", pivotController.getStudent);

export default pivotRouter;
