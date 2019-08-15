import '../setupTest.js'
import CurrentIngredient from '../components/CurrentIngredient';
let wrapper
beforeEach( () => { 
  wrapper = shallow(<CurrentIngredient text={'test'}/>) });

it('render a ul html tag', () => {
  expect(wrapper.find('li')).toHaveLength(1);
});

it('renders the ingredient just inputed', () => {
  expect(wrapper.text()).toEqual('xtest')
});

it('call function onDeleteIngredient when click on X', () => {
  const onDeleteIngredientMock = jest.fn()
  const wrapper = shallow(<CurrentIngredient onDeleteIngredient={onDeleteIngredientMock}/>)
  const input1 = wrapper.find('#delete-ingredient')
  input1.simulate('click')
  expect(onDeleteIngredientMock).toHaveBeenCalled()
});
