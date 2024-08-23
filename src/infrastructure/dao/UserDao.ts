import BaseRepository from '../../domain/repositories/BaseRepositories';
import UserModel from '../database/models/UserModel';
import { Optional } from 'sequelize';

class SequelizeDataRepository extends BaseRepository<UserModel> {
    constructor() {
        super(UserModel);
    }

    async findById(id: number): Promise<UserModel | null> {
        try {
            return await UserModel.findByPk(id);
        } catch (error) {
            console.error('Error finding data by ID:', error);
            throw new Error(`Error finding data by ID: ${error}`);
        }
    }

    async findAll(): Promise<UserModel[]> {
        try {
            return await UserModel.findAll();
        } catch (error) {
            console.error('Error finding data', error);
            throw new Error(`Error finding ${error}`);
        }
    }

    async save(entity: Partial<UserModel>): Promise<UserModel> {
        try {
            return await UserModel.create(entity as Optional<UserModel, 'userId'>);
        } catch (error) {
            console.error('Error saving data:', error);
            throw new Error(`Error saving data: ${error}`);
        }
    }
}

export default SequelizeDataRepository;
