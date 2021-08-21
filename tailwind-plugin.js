// module.exports = function (context, options) {
//   return {
//     name: 'postcss-tailwindcss-loader',
//     configureWebpack (config, isServer, utils) {
//       return {
//         module: {
//           rules: [
//             {
//               test: /\.css$/,
//               use: [
//                 {
//                   loader: require.resolve('postcss-loader'),
//                   options: {
//                     // ident: 'postcss',
//                     postcssOptions: {
//                       plugins: () => [
//                         require('postcss-import'),
//                         require('tailwindcss'),
//                         require('postcss-preset-env')({
//                           autoprefixer: {
//                             flexbox: 'no-2009',
//                           },
//                           stage: 4,
//                         }),
//                       ],
//                     }
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//       }
//     },
//   }
// }

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin',
    configurePostCss (postcssOptions) {
      // Appends new PostCSS plugin.
      postcssOptions.plugins.push(require('postcss-import'));
      postcssOptions.plugins.push(require('tailwindcss'));
      postcssOptions.plugins.push(require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 4,
      }));
      return postcssOptions;
    },
  };
};
