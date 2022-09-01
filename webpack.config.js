const production = false;

const modeOptions = (mode) => mode ? 'production' : 'development';

const defaultOptions = {
    mode: modeOptions(production),
    entry: `./assets/src/js/index.js`,

    output: {
        path: `${__dirname}/assets/dist/js`,
        filename: "main.js"
    },

    resolve: {
        extensions: ['.js', '.json', '.wasm'],
    },
}

module.exports = [defaultOptions];