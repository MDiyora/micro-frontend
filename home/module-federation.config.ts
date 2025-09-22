export const mfConfig = {
    name: 'home',
    publicPath: 'localhost:3000',
    filename: 'remoteEntry.js',
    remotes: {
        hr: 'hr@http://localhost:3001/remoteEntry.js',
        finance: 'finance@http://localhost:3002/remoteEntry.js',
    },
    exposes: {
        './Header': './src/Header.tsx',
    },
    shared: ['react', 'react-dom'],
};
