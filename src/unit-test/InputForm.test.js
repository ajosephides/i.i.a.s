import '../setupTests.js'
import InputForm from '../components/InputForm';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  shallow(<InputForm />);
});

it('render a form', () => {
  const wrapper = shallow(<InputForm />);
  expect(wrapper.type()).toEqual('form')
});

it('render 3 text boxes', () => {
  const wrapper = shallow(<InputForm />);
  // const inputs = [[<input></input>, <input></input>, <input></input>, <input></input>]]
  // expect(wrapper.containsMatchingElement(inputs)).toEqual(true);
});

it('renders without crashing', () => {
  const wrapper = mount(<InputForm />);
  expect(wrapper.text()).toEqual("Ingredient 1: Ingredient 2:Ingredient 3:");
  wrapper.unmount();
});
