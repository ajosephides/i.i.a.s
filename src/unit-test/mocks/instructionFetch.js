export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([{
        steps: [{number: 1, step: "preheat the oven to 200 C"}]}])
  });
};
