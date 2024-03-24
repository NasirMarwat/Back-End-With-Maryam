import Joi from "joi";
import studentModel from "../../model/student/index.js";

const studentController = {
  createStudent: async (req, res) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        studentName: Joi.string().required(),
        email: Joi.string().required(),
        Address: Joi.string().required(),
        gender: Joi.string().required(),
        Status: Joi.string().required(),
      });
      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res.status(400).json({
          messsge: "Invalide data",
          error: isValidate.error,
        });
      }
      const data1 = await studentModel.create(req.body);
      await data1.save();
      res.json({
        messsge: "Created Successfully",
        data1,
      });
    } catch (error) {
      console.error(error);
      res.json({
        messsge: "Internal Server Error",
      });
    }
  },

  getOneStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await studentModel.findByPk(id);
      if (data) {
        res.json({
          messsge: "This is your student",
          data,
        });
      } else {
        res.json({
          messsge: "This student is not available in your student list",
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  getAllStudent: async (req, res) => {
    try {
      const data = await studentModel.findAll();
      res.json({
        messsge: "This is your all students",
        data,
      });
    } catch (error) {
      console.error(error);
      res.json({
        messsge: "Internal Server Error",
      });
    }
  },

  updateStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const data1 = await studentModel.findByPk(id);

      const data = req.body;
      const schema = Joi.object({
        studentName: Joi.string().required(),
        email: Joi.string().required(),
        Address: Joi.string().required(),
        gender: Joi.string().required(),
        Status: Joi.string().required(),
      });

      const isValidate = schema.validate(data);
      if (isValidate.error) {
        return res.status(404).json({
          messsge: "Invalid Data",
          error: isValidate.error,
        });
      }

      if (data1) {
        await data1.update(req.body);
        res.json({
          messsge: "Updated Successfully",
          data1,
        });
      } else {
        res.json({
          messsge: "This Student is not available",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        messsge: "Internal Server Error",
      });
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await studentModel.findByPk(id);
      if (data) {
        await data.destroy();
        res.json({
          messsge: "Deleted Successfully",
        });
      } else {
        res.json({
          messsge: "Student not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        messsge: "Internal Server Errro",
      });
    }
  },
};

export default studentController;
