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

it('call function onDeleteIngredient when click on X', () => {
  const onDeleteIngredientMock = jest.fn()
  const wrapper = shallow(<Ingredient onDeleteIngredient={onDeleteIngredientMock}/>)
  const input1 = wrapper.find('#delete-button')
  input1.simulate('click')
  expect(onDeleteIngredientMock).toHaveBeenCalled()
});
