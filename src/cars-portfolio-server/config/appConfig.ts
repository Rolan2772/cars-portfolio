const LOCAL_CORS_CONFIG: object = {
    origin: '*',
    methods: '*'
};

const CORS_CONFIG: object = {};

class AppConfig {

    constructor() {
    }

    static getCorsConfig(): object {
        return process.env.NODE_ENV === 'production'
            ? CORS_CONFIG
            : LOCAL_CORS_CONFIG
    }
}

export default AppConfig;