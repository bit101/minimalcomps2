const tag = "1.1.1";

export default {
  input: "src/allcomps",
  output: [
    {
      file: `dist/minimalcomps_${tag}.js`,
      format: 'iife',
      name: "mc2",
    },
    {
      file: `dist/minimalcomps_${tag}.mjs`,
      format: 'es',
    },
  ],
};
