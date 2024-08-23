"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIdParam = req.params.userId;
            const userId = parseInt(userIdParam, 10);
            // Validasi apakah konversi berhasil
            if (isNaN(userId)) {
                res.status(400).json({ error: 'Invalid user ID' });
                return;
            }
            try {
                const user = yield this.userUseCase.getUserById(userId);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    getUserList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userUseCase.getUserList();
                return res.status(200).json(users);
            }
            catch (error) {
                console.error('Error fetching user list:', error);
                return res.status(500).json({ message: `Failed to fetch user list: ${error}` });
            }
        });
    }
    saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                // Menggunakan use case untuk menyimpan user
                const savedUser = yield this.userUseCase.saveUser(userData);
                // Mengembalikan respons dengan status 201 (Created) dan data user yang disimpan
                return res.status(201).json(savedUser);
            }
            catch (error) {
                console.error('Error saving user:', error);
                // Mengembalikan respons dengan status 500 (Internal Server Error) jika terjadi error
                return res.status(500).json({ message: `Failed to save user: ${error}` });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map