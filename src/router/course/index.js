import { Router } from "express";
import courseController from "../../controller/course/index.js";

const courseRouter = Router();
courseRouter.post("/createCourse", courseController.createCourse);
courseRouter.get("/getOneCourseById/:id", courseController.getOneById);
courseRouter.get("/getAllCourse", courseController.getAllCourse);
courseRouter.put("/updateCourse/:id", courseController.updateCourse);
courseRouter.delete("/deleteCourse/:id", courseController.deleteCourse);
export default courseRouter;
