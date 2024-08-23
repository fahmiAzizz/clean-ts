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
class UserUseCase {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.baseRepository.findById(id);
        });
    }
    getUserList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.baseRepository.findAll();
            }
            catch (error) {
                console.error('Error fetching user list:', error);
                return [];
            }
        });
    }
    saveUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const savedUser = yield this.baseRepository.save(userData);
                return savedUser;
            }
            catch (error) {
                console.error('Error executing save user use case:', error);
                throw new Error(`Failed to save user`);
            }
        });
    }
}
exports.default = UserUseCase;
//# sourceMappingURL=UserUseCase.js.map