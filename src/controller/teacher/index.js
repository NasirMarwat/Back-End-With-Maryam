import Joi from "joi";
import teacherModel from "../../model/teacher/index.js";

const teacherController = {
  createTeacher: async (req, res) => {
    try {
      const data = await req.body;
      const schema = Joi.object({
        teacherName: Joi.string().required(),
        email: Joi.string().required(),
        qualification: Joi.string().required(),
      });

      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res.status(404).json({
          message: "Invalid data",
          error: isValidate.error,
        });
      }

      const data1 = await teacherModel.create(req.body);
      res.json({
        message: "Created Successfully",
        data1,
      });
    } catch (error) {
      console.error(error);
    }
  },

  getOneTeacher: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await teacherModel.findByPk(id);
      if (data) {
        res.json({
          message: "This is Your Teacher ",
          data,
        });
      } else {
        res.json({
          message: "Ye Teacher to nhi mil raha hai",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  getAllTeacher: async (req, res) => {
    try {
      const data = await teacherModel.findAll();
      res.json({
        message: "This is your All Teachers ",
        data,
      });
    } catch (error) {
      console.error(error);
      res.json({
        message: "Internal Server Error",
      });
    }
  },

  updateTeacher: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await teacherModel.findByPk(id);
      if (!data) {
        res.json({
          message: "This teacher Id is not available in your teacher list",
        });
      }
      const data1 = req.body;
      const schema = Joi.object({
        teacherName: Joi.string().required(),
        email: Joi.string().required(),
        qualification: Joi.string().required(),
      });
      const isValidate = schema.validate(data1);
      if (isValidate.error) {
        return res.status(404).json({
          message: "invalid data",
          error: isValidate.error,
        });
      }
      if (data) {
        await data.update(req.body);
        res.json({
          message: "Updated Successfully",
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
  deleteTeacher: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await teacherModel.findByPk(id);
      if (data) {
        await data.destroy();
        res.json({
          message: "Deleted Successfully",
        });
      } else {
        res.json({
          message: "This Teacher is not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        message: "INTERNAL SERVER ERROR",
      });
    }
  },
};

export default teacherController;
