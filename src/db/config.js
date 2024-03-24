import { Sequelize } from "sequelize";

const sequelize = new Sequelize("project", "postgres", "12345678", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try {
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Program To War Giya ");
  }
};

export default sequelize;
export { connectDB };
