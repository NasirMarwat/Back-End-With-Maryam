import PivotModel from "../model/PivotModel/index.js";
import courseModel from "../model/course/index.js";
import studentModel from "../model/student/index.js";
import teacherModel from "../model/teacher/index.js";

const dbInit = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  });
  await courseModel.sync({
    alter: true,
    force: false,
  });

  await teacherModel.sync({
    alter: true,
    force: false,
  });

  await PivotModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
