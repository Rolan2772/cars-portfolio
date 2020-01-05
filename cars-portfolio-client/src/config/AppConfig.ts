export class AppConfig {

    constructor() {
    }

    static getApiUrl(): string {
        return process.env.NODE_ENV === 'production'
            ? '/api'
            // @TODO: resolve docker compose host
            : 'http://localhost:3000/api'
    }
}