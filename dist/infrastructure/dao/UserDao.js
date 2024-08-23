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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepositories_1 = __importDefault(require("../../domain/repositories/BaseRepositories"));
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
class SequelizeDataRepository extends BaseRepositories_1.default {
    constructor() {
        super(UserModel_1.default);
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserModel_1.default.findByPk(id);
            }
            catch (error) {
                console.error('Error finding data by ID:', error);
                throw new Error(`Error finding data by ID: ${error}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserModel_1.default.findAll();
            }
            catch (error) {
                console.error('Error finding data', error);
                throw new Error(`Error finding ${error}`);
            }
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield UserModel_1.default.create(entity);
            }
            catch (error) {
                console.error('Error saving data:', error);
                throw new Error(`Error saving data: ${error}`);
            }
        });
    }
}
exports.default = SequelizeDataRepository;
//# sourceMappingURL=UserDao.js.map