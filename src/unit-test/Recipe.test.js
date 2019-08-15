import '../setupTest.js'
import Recipe from '../components/Recipe';

it('renders without crashing', () => {
  shallow(<Recipe recipe={test}/>);
});

it('renders the recipe title', () => {
  const wrapper = shallow(<Recipe title={'test'}/>);
  expect(wrapper.html()).toContain('test')
});

it('renders the recipe image', () => {
  var imgUrl = "https://spoonacular.com/recipeImages/973514-312x231.jpg"
  const wrapper = shallow(<Recipe image={imgUrl}/>);
  expect(wrapper.html()).toContain(imgUrl)
});

// it('checks behaviour of handleClick', () => {
//   const wrapper = shallow(<Recipe title={'test'}/>);
//   const event = {preventDefault: function(){}}
//   expect(wrapper.state('showRecipeExpanded')).toEqual(false)
//   wrapper.instance().handleClick(event)
//   expect(wrapper.state('showRecipeExpanded')).toEqual(true)
// })
