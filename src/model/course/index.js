import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const courseModel = sequelize.define(
  "Course",
  {
    courseName: {
      type: DataTypes.STRING,
    },

    CourseFee: {
      type: DataTypes.INTEGER,
    },
  },
  {
    paranoid: true,
  }
);

export default courseModel;
