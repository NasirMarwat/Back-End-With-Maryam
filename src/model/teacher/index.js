import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const teacherModel = sequelize.define(
  "Teacher",
  {
    teacherName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      // unique: true,
    },
    qualification: {
      type: DataTypes.STRING,
    },
    // teacherID: {
    //   primaryKey: true,
    //   type: DataTypes.INTEGER,
    //   unique: true,
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
  },
  {
    paranoid: true,
  }
);

export default teacherModel;
