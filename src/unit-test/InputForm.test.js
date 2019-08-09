import '../setupTests.js'
import InputForm from '../components/InputForm';

let wrapper;
beforeEach( () => {
  wrapper = shallow(<InputForm />)
})

it('renders without crashing', () => {
  shallow(<InputForm />);
});

it('render a form', () => {
  expect(wrapper.type()).toEqual('form')
});

it('render 3 text boxes', () => {
  expect(wrapper.find({ name: "ing1" })).toHaveLength(1);
  expect(wrapper.find({ name: "ing2" })).toHaveLength(1);
  expect(wrapper.find({ name: "ing3" })).toHaveLength(1);
});

it('render 1 submit button', () => {
  expect(wrapper.find({ type: "submit" })).toHaveLength(1);
});

it('renders without crashing', () => {
  expect(wrapper.text()).toEqual("Ingredient 1: Ingredient 2:Ingredient 3:");
});

it('call function handleChange on click', () => {
  const input1 = wrapper.find({ type: "ing1" })
  input1.simulate('change', { target: { value: "pasta" } })
  expect(wrapper.handleSubmit).toHaveBeenCalled();
});
