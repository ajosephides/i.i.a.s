import '../setupTest.js'
import IngredientsList from '../components/IngredientsList';
let wrapper
beforeEach( () => { wrapper = shallow(<IngredientsList ingredients={ ['test'] }/>) });

it('renders without crashing', () => {
  shallow(<IngredientsList ingredients={ ['test'] }/>);
});

it('render a ul html tag', () => {
  expect(wrapper.type()).toEqual('ul')
});

it('render a ul html tag', () => {
  expect(wrapper.find('li')).toHaveLength(1);
});

it('renders the ingredient just inputed', () => {
  expect(wrapper.text()).toEqual('test')
});
