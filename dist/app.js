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
const express_1 = __importDefault(require("express"));
const UserRoute_1 = __importDefault(require("./infrastructure/webserver/routes/UserRoute"));
const sequelize_1 = __importDefault(require("./infrastructure/database/sequelize"));
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Sinkronkan semua model dengan database
        yield sequelize_1.default.sync({ force: false }); // Ubah `force` menjadi `true` untuk drop tabel jika diperlukan
        console.log('Database synchronized');
    }
    catch (error) {
        console.error('Error syncing database:', error);
    }
});
syncDatabase();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', UserRoute_1.default);
app.listen(3002, () => {
    console.log("Server Run In PORT 3002");
});
//# sourceMappingURL=app.js.map