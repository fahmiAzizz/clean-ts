import User from '../domain/entities/User';
import BaseRepository from '../domain/repositories/BaseRepositories';

interface IUserUseCase {
    getUserById(id: number): Promise<User | null>;
    getUserList(): Promise<User[]>;
    saveUser(userData: Partial<User>): Promise<User>;
}

export default class UserUseCase implements IUserUseCase {
    private baseRepository: BaseRepository<User>;

    constructor(baseRepository: BaseRepository<User>) {
        this.baseRepository = baseRepository;
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.baseRepository.findById(id);
    }

    async getUserList(): Promise<User[]> {
        try {
            return await this.baseRepository.findAll();
        } catch (error) {
            console.error('Error fetching user list:', error);
            return [];
        }
    }

    async saveUser(userData: Partial<User>): Promise<User> {
        try {
            const savedUser = await this.baseRepository.save(userData as User);
            return savedUser;
        } catch (error) {
            console.error('Error executing save user use case:', error);
            throw new Error(`Failed to save user`);
        }
    }


}