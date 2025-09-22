export const mfConfig = {
    name: 'finance',
    publicPath: 'localhost:3002',
    filename: 'remoteEntry.js',
    remotes: {
        home: 'home@http://localhost:3000/remoteEntry.js',
    },
    exposes: {
        './FinanceApp': './src/FinanceApp.tsx',
    },
    shared: ['react', 'react-dom'],
};
