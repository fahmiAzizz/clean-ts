import express from "express";
import userRoute from "./infrastructure/webserver/routes/UserRoute";
import sequelize from "./infrastructure/database/sequelize";

const syncDatabase = async () => {
    try {
        // Sinkronkan semua model dengan database
        await sequelize.sync({ force: false }); // Ubah `force` menjadi `true` untuk drop tabel jika diperlukan
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();

const app = express();

app.use(express.json());
app.use('/user', userRoute);

app.listen(3002, () => {
    console.log("Server Run In PORT 3002");
})