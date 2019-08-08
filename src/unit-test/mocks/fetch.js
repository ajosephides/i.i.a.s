export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          name: 'Mashed Potatoes'
        },
        {
          id: 1,
          name: 'Pastrami'
        }
      ])
  });
};