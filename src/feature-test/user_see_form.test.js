import '../setupTests.js'
import App from '../App';

xit('renders without crashing', () => {
  const wrapper = mount(<App />);
  const input = wrapper.find('#input1')
  input.simulate("change", { target: { value: "potatoes" }})
  // expect(wrapper.text()).toEqual("potatoes");
});

