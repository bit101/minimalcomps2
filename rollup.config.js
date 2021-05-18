export default {
  input: "src/allcomps",
  output: [
    {
      file: 'dist/minimalcomps.js',
      format: 'iife',
      name: "mc2",
    },
    {
      file: 'dist/minimalcomps.mjs',
      format: 'es',
    },
  ],
};
