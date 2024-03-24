import courseModel from "../../model/course/index.js";
import Joi from "joi";

const courseController = {
  createCourse: async (req, res) => {
    try {
      const data = await req.body;
      const schema = Joi.object({
        courseName: Joi.string().required(),
        CourseFee: Joi.number().required(),
      });

      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res
          .status(400)
          .json({ message: "Invalid data", error: isValidate.error });
      }
      const data1 = await courseModel.create(req.body);

      res.json({
        message: "Created Successfully",
        data1,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },
  getOneById: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await courseModel.findByPk(id);
      if (!data) {
        res.json({
          message: "Does not exist the course",
        });
      } else {
        res.json({
          message: "This is your course ",
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

  getAllCourse: async (req, res) => {
    try {
      const data = await courseModel.findAll();
      res.json({
        message: "This is Your all course",
        data,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const id = req.params.id;
      const data1 = await courseModel.findByPk(id);

      const data = req.body;

      const schema = Joi.object({
        courseName: Joi.string().required(),
        CourseFee: Joi.number().required(),
      });

      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res.status(400).json({
          message: "invalid Data",
          error: isValidate.error,
        });
      }

      if (data1) {
        await data1.update(req.body);
        res.json({
          message: "Updated Successfully",
          data1,
        });
      } else {
        res.json({
          message: "This course is not exist in your course list",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await courseModel.findByPk(id);
      if (data) {
        await data.destroy();
        res.json({
          message: "Deleted Successfully",
        });
      } else {
        res.json({
          message: "This course is not exists in your course list",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },
};

export default courseController;
