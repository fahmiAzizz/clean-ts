export default class BaseRepository<T> {

    private model: any;

    constructor(model: any) {
        this.model = model;
    }

    async findById(id: number | string): Promise<T | null> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

    async update(id: number | string, entity: T): Promise<T | null> {
        throw new Error("Method not implemented");
    }

    async save(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}
