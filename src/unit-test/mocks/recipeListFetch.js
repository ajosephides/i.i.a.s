export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          title: 'Mashed Potatoes'
        },
        {
          id: 1,
          title: 'Pastrami'
        }
      ])
  });
};