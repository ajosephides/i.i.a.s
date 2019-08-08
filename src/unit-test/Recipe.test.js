import '../setupTests.js'
import Recipe from '../components/Recipe';

it('renders without crashing', () => {
  var test = {title: 'test', image:'blah'}
  shallow(<Recipe recipe={test}/>);
});

it('renders the recipe title', () => {
  var test = {title: 'test', image:'blah'}
  const wrapper = shallow(<Recipe recipe={test}/>);
  expect(wrapper.text()).toEqual('test')
});

it('renders the recipe image', () => {
  var imgUrl = "https://spoonacular.com/recipeImages/973514-312x231.jpg"
  var test = { title: 'test', image:imgUrl }
  const wrapper = shallow(<Recipe recipe={test}/>);
  expect(wrapper.find("img").prop("src")).toEqual(imgUrl)
});
