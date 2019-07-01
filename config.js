const DEFAULT_ENV = 'development';
const envFromShell = process.env.NODE_ENV;
const env = envFromShell || DEFAULT_ENV;

const baseConfig = {
  development: {
    tableWorkflowID: "3251"
  },
  production: {
    tableWorkflowID: "11308"
  }
}

const config = baseConfig[env];

export { config };
