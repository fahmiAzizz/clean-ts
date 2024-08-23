import { Request, Response } from "express";
import UserUseCase from "../../../use-cases/UserUseCase";
import User from "../../../domain/entities/User";

export default class UserController {
    private userUseCase: UserUseCase;
    constructor(userUseCase: UserUseCase) {
        this.userUseCase = userUseCase;
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const userIdParam = req.params.userId;
        const userId = parseInt(userIdParam, 10);

        // Validasi apakah konversi berhasil
        if (isNaN(userId)) {
            res.status(400).json({ error: 'Invalid user ID' });
            return;
        }

        try {
            const user = await this.userUseCase.getUserById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async getUserList(req: Request, res: Response): Promise<Response> {
        try {
            const users: User[] = await this.userUseCase.getUserList();
            return res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching user list:', error);

            return res.status(500).json({ message: `Failed to fetch user list: ${error}` });
        }
    }

    async saveUser(req: Request, res: Response): Promise<Response> {
        try {
            const userData: Partial<User> = req.body;

            // Menggunakan use case untuk menyimpan user
            const savedUser = await this.userUseCase.saveUser(userData);

            // Mengembalikan respons dengan status 201 (Created) dan data user yang disimpan
            return res.status(201).json(savedUser);
        } catch (error) {
            console.error('Error saving user:', error);

            // Mengembalikan respons dengan status 500 (Internal Server Error) jika terjadi error
            return res.status(500).json({ message: `Failed to save user: ${error}` });
        }
    }
}