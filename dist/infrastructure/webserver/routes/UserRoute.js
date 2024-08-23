"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserDao_1 = __importDefault(require("../../dao/UserDao"));
const UserUseCase_1 = __importDefault(require("../../../use-cases/UserUseCase"));
const router = express_1.default.Router();
const userDAO = new UserDao_1.default();
const userUseCase = new UserUseCase_1.default(userDAO);
const userController = new UserController_1.default(userUseCase);
router.get('/:userId', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => userController.getUserList(req, res));
router.post('/', (req, res) => userController.saveUser(req, res));
exports.default = router;
//# sourceMappingURL=UserRoute.js.map