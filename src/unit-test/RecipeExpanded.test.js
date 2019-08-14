import '../setupTest.js'
import RecipeExpanded from '../components/RecipeExpanded';


it('renders without crashing', () => {
  shallow(<RecipeExpanded />)
});


// describe('#getIngredients', () => {
//   test('calls fetch once called', () => {
//     const fetchSpy = jest.spyOn(window, 'fetch');
//     const setState = jest.fn()
//     const wrapper = shallow(<RecipeExpanded id={1}/>);
//     wrapper.instance().getIngredients()
//     expect(fetchSpy).toBeCalled();
//   })
// });
//
//
// describe('#getInstructions', () => {
//   test('calls fetch once called', () => {
//     const fetchSpy = jest.spyOn(window, 'fetch');
//     const setState = jest.fn()
//     const wrapper = shallow(<RecipeExpanded id={1}/>);
//     wrapper.instance().getIngredients()
//     expect(fetchSpy).toBeCalled();
//   })
// });
