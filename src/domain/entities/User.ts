class User {
    userId: number;
    username: string;
    email: string;
    password: string;
    token: string;
    constructor(userId: number, username: string, email: string, password: string, token: string) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}

export default User;