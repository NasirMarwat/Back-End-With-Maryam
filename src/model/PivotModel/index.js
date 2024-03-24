import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import studentModel from "../student/index.js";
import courseModel from "../course/index.js";
import teacherModel from "../teacher/index.js";

const PivotModel = sequelize.define(
  "PivotModel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  },
  {
    paranoid: true,
  }
);
export default PivotModel;

// studentModel.belongsToMany(courseModel, { through: PivotModel });
// courseModel.belongsToMany(studentModel, { through: PivotModel });

// studentModel.belongsToMany(teacherModel, { through: PivotModel });
// teacherModel.belongsToMany(studentModel, { through: PivotModel });

// teacherModel.belongsToMany(courseModel, { through: PivotModel });
// courseModel.belongsToMany(teacherModel, { through: PivotModel });

// studentModel.belongsToMany(PivotModel, { through: PivotModel });
// PivotModel.belongsToMany(studentModel, { through: PivotModel });

courseModel.belongsToMany(studentModel, { through: PivotModel });
studentModel.belongsToMany(courseModel, { through: PivotModel });

studentModel.belongsToMany(teacherModel, { through: PivotModel });
teacherModel.belongsToMany(studentModel, { through: PivotModel });

teacherModel.belongsToMany(courseModel, { through: PivotModel });
courseModel.belongsToMany(teacherModel, { through: PivotModel });

// studentModel.belongsToMany(PivotModel, { through: PivotModel });
// PivotModel.belongsToMany(studentModel, { through: PivotModel });
