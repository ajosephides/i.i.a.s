import '../setupTest.js'
import InputForm from '../components/InputForm';

let wrapper;
beforeEach( () => {
  wrapper = shallow(<InputForm onHandleChange={function(){}}/>)
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

it('call function onHandleChange on text field change', () => {
  const onHandleChangeMock = jest.fn()
  const wrapper = shallow(<InputForm onHandleChange={onHandleChangeMock}/>)
  const input1 = wrapper.find({ name: "ing1" })
  input1.simulate('change')
  expect(onHandleChangeMock).toHaveBeenCalled()
});

it('call function onHandleSubmit on submit', () => {
  const onHandleSubmitMock = jest.fn()
  const wrapper = shallow(<InputForm onHandleSubmit={onHandleSubmitMock}/>)
  const input1 = wrapper.find('form')
  const eventMock = {preventDefault:function(){}}
  input1.simulate('submit', eventMock)
  expect(onHandleSubmitMock).toBeCalled()
});
