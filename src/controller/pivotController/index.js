// pivotController.js
import Joi from "joi";
import PivotModel from "../../model/PivotModel/index.js";
import teacherModel from "../../model/teacher/index.js";
import courseModel from "../../model/course/index.js";
import studentModel from "../../model/student/index.js";
const pivotController = {
  createPivot: async (req, res) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        // id: Joi.number().integer().required(),
        studentId: Joi.number().integer().required(),
        TeacherId: Joi.number().integer().required(),
        CourseId: Joi.number().integer().required(),
      });

      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res.status(400).json({
          message: "Invalid data",
          error: isValidate.error.details,
        });
      }

      const data1 = await PivotModel.create(req.body);
      await data1.save();

      res.status(201).json(data1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getTeacherData: async (req, res) => {
    try {
      const data = await teacherModel.findOne({
        where: {
          id: req.params.TeacherId,
        },
        include: [courseModel, studentModel],
      });
      if (!data) {
        res.json({
          message: "Ye Teacher ID available nahi hai",
        });
      }
      res.json({
        message: "This is your teacher",
        data,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  getCourse: async (req, res) => {
    try {
      const data = await courseModel.findOne({
        where: {
          id: req.params.CourseId,
        },
        include: [teacherModel, studentModel],
      });
      if (!data) {
        res.json({
          message: "Ye available nhi hia",
        });
      } else {
        res.json({
          message: "Ye hai apka data",
          data,
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  getStudent: async (req, res) => {
    try {
      const id = req.params.studentId;
      const data = await studentModel.findOne({
        where: {
          id: req.params.studentId,
        },
        include: [teacherModel, courseModel],
      });
      if (!data) {
        res.json({
          message: "Ye Student nhi database mei kindly koi check karo",
        });
      } else {
        res.json({
          message: "Ye hai apka student data",
          data,
        });
      }
    } catch (error) {}
  },
};

export default pivotController;
