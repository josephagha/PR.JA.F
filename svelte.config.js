import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'
import autoprefixer from 'autoprefixer';

export default {
  preprocess: [
  sveltePreprocess({
      scss: {
        sync: true,
        implementation: sass,
        prependData: '@use "sass/_imports.scss" as *;',
      },

      postcss: {
        plugins: [autoprefixer],
      },
    }),
  ],
}