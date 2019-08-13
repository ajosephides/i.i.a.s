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

it('render 1 text box', () => {
  expect(wrapper.find({ name: "ing" })).toHaveLength(1);
});

it('render 1 submit button', () => {
  expect(wrapper.find({ type: "submit" })).toHaveLength(1);
});

it('the page includes text Ingredients and Add', () => {
  expect(wrapper.text()).toEqual("Ingredients:Add");
});

it('call function onHandleChange on text field change', () => {
  const onHandleChangeMock = jest.fn()
  const wrapper = shallow(<InputForm onHandleChange={onHandleChangeMock}/>)
  const input1 = wrapper.find({ name:"ing" })
  input1.simulate('change')
  expect(onHandleChangeMock).toHaveBeenCalled()
});

it('call function onHandleSubmit on submit', () => {
  const onHandleSubmitMock = jest.fn()
  const wrapper = shallow(<InputForm onHandleSubmit={onHandleSubmitMock}/>)
  const input1 = wrapper.find({ type:'submit' })
  const eventMock = {preventDefault:function(){}}
  input1.simulate('click', eventMock)
  expect(onHandleSubmitMock).toBeCalled()
});

it('call function onHandleChangeAdd on click', () => {
  const onHandleChangeAddMock = jest.fn()
  const wrapper = shallow(<InputForm onHandleChangeAdd={onHandleChangeAddMock}/>)
  const input1 = wrapper.find('#add-button')
  const eventMock = {preventDefault:function(){}}
  input1.simulate('click', eventMock)
  expect(onHandleChangeAddMock).toBeCalled()
});
