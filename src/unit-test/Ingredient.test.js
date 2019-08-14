import '../setupTest.js'
import Ingredient from '../components/Ingredient';
let wrapper
beforeEach( () => { 
  wrapper = shallow(<Ingredient text={'test'}/>) });

it('render a ul html tag', () => {
  expect(wrapper.find('li')).toHaveLength(1);
});

it('renders the ingredient just inputed', () => {
  expect(wrapper.text()).toEqual('x test')
});

it('renders')
