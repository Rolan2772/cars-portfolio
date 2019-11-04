export class AppConfig {

    constructor() {
    }

    static getApiUrl(): string {
        return process.env.NODE_ENV === 'production'
            ? '/api'
            : 'http://localhost:3000/api'
    }
}