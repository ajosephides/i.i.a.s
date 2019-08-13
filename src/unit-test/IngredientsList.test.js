import '../setupTest.js'
import IngredientsList from '../components/IngredientsList';

it('renders without crashing', () => {
  shallow(<IngredientsList ingredients={ ['test'] }/>);
});

it('renders the recipe title', () => {
  const wrapper = shallow(<IngredientsList ingredients={ ['test'] }/>);
  expect(wrapper.text()).toEqual('test')
});
