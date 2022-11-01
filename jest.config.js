module.exports = {
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/mediaFileMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/'],
};
