module.exports = {
    roots: ['./src'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: ['node_modules/(?!node-fetch)/'],
};
