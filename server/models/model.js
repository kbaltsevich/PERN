const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  middle_name: { type: DataTypes.STRING },
  place_of_work: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Request = sequelize.define("request", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  datedata: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: "на рассмотрении" },
  waiting_data: { type: DataTypes.STRING, defaultValue: "на рассмотрении" },
  secretary: { type: DataTypes.STRING, defaultValue: "Кузнецова Олеся" },
  email_secretary: {
    type: DataTypes.STRING,
    defaultValue: "secretaryemail@test.com",
  },
  userId: { type: DataTypes.INTEGER },
});

module.exports = {
  User,
  Request,
};
