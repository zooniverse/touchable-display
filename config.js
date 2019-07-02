const DEFAULT_ENV = 'development';
const envFromShell = process.env.NODE_ENV;
const env = envFromShell || DEFAULT_ENV;

const baseConfig = {
  development: {
    projectID: "1857",
    tableWorkflowID: "3251"
  },
  production: {
    projectID: "5733",
    tableWorkflowID: "11308"
  }
}

const config = baseConfig[env];

export { config };
