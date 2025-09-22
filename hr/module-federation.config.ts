export const mfConfig = {
    name: 'hr',
    publicPath: 'localhost:3001',
    filename: 'remoteEntry.js',
    remotes: {
        home: 'home@http://localhost:3000/remoteEntry.js',
    },
    exposes: {
        './HRApp': './src/HRApp.tsx',
    },
    shared: ['react', 'react-dom'],
};
