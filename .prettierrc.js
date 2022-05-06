// Here, I’ve set up some rules so that Prettier will change any double quotes
// (") to single ones (') and remove any semicolons (;). I’m not advocating
// for or against semicolons and double quotes. This is a simple example of
// how you might add some Prettier configuration rules to your project.
// We could do something similar for ESLint as well.
module.exports = {
  singleQuote: true,
  semi: false,
}
