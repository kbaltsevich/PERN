const { User, Request } = require("../models/model");
const ApiError = require("../error/ApiError");

class RequsetController {
  async create(req, res) {
    const { userId, datedata } = req.body;
    const authorRequest = await User.findOne({ where: { id: userId } });
    if (!authorRequest) {
      return next(ApiError.badRequest("Неавторизированы"));
    }
    const createRequest = await Request.create({ userId, datedata });
    return res.json({ message: "OK!" });
  }
  async getAll(req, res) {
    const { userId } = req.body;
    const authorRequest = await User.findOne({ where: { id: userId } });
    if (!authorRequest) {
      return next(ApiError.badRequest("Неавторизированы"));
    }
    const requestsUser = await Request.findAll({ where: { userId } });
    return res.json(requestsUser);
  }
  async getOne(req, res) {
    const { userId } = req.body;
    const { id } = req.params;
    const authorRequest = await User.findOne({ where: { id: userId } });
    if (!authorRequest) {
      return next(ApiError.badRequest("Неавторизированы"));
    }
    const requestsUser = await Request.findAll({ where: { userId, id } });
    return res.json(requestsUser);
  }
}

module.exports = new RequsetController();
