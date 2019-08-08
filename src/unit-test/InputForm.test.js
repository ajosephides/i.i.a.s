import '../setupTests.js'
import InputForm from '../components/InputForm';

beforeEach(() => {
  ;
});

it('renders without crashing', () => {
  shallow(<InputForm />);
});

it('render a form', () => {
  const wrapper = shallow(<InputForm />);
  expect(wrapper.type()).toEqual('form')
});

it('render 3 text boxes', () => {
  const wrapper = shallow(<InputForm />);
  expect(wrapper.find({ name: "ing1" })).toHaveLength(1);
  expect(wrapper.find({ name: "ing2" })).toHaveLength(1);
  expect(wrapper.find({ name: "ing3" })).toHaveLength(1);
});

it('render 1 submit button', () => {
  const wrapper = shallow(<InputForm />);
  expect(wrapper.find({ type: "submit" })).toHaveLength(1);
});

it('renders without crashing', () => {
  const wrapper = shallow(<InputForm />);
  expect(wrapper.text()).toEqual("Ingredient 1: Ingredient 2:Ingredient 3:");
});

it('call function handleChange on click', () => {

  expect(wrapper.handleChange).toBeCalled();
});
