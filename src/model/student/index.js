import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const studentModel = sequelize.define(
  "student",
  {
    studentName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      // unique: true,
    },
    Address: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    Status: {
      type: DataTypes.STRING,
    },
    // studentID: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    // dateOfBirth: {
    //   type: DataTypes.DATE,
    // },
    // phoneNumber: {
    //   type: DataTypes.STRING,
    // },
    // address: {
    //   type: DataTypes.STRING,
    // },
    // addmisionDate: {
    //   type: DataTypes.DATE,
    // },
    // gpa: {
    //   type: DataTypes.FLOAT,
    // },
  },
  {
    paranoid: true,
  }
);

export default studentModel;
