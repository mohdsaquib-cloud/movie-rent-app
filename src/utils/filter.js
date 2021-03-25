const { filter } = require("lodash");

export function filter(items) {
  const unique = [...new Set(items.map((item) => item.genre.name))];
  return unique;
}
