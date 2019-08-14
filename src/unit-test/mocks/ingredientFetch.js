export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        extendedIngredients: [{id: 1, original: '1 Tbsp butter'}]
    })
  });
};
