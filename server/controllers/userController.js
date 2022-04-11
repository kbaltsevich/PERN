const bcrypt = require("bcrypt");
const { User } = require("../models/model");
const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) =>
  jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "24h" });

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Не корректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ ...req.body, password: hashPassword });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким email не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }

  async getUser(req, res, next) {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким email не найден"));
    }
    return res.json({ ...user.dataValues, password: "********" });
  }
}

module.exports = new UserController();