import express from "express";
import UserController from "../controllers/UserController";
import UserDAO from "../../dao/UserDao";
import UserUseCase from "../../../use-cases/UserUseCase";

const router = express.Router();
const userDAO = new UserDAO();
const userUseCase = new UserUseCase(userDAO);
const userController = new UserController(userUseCase);

router.get('/:userId', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => userController.getUserList(req, res));
router.post('/', (req, res) => userController.saveUser(req, res));

export default router;