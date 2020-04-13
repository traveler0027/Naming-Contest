const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development'

//allows us to control the port from the process but we don't have to
export default {
    port: env.PORT || 8080
};