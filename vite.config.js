export default {
  build: {
    // Pasta de entrada
    input: ['./index.html', './assets/**'],

    // Pasta de saída
    outDir: './dist',

    minify: true,

    // Geração de mapas de origem
    sourcemap: true,

    // Ambiente de destino
    target: 'es2015',
  },
};
