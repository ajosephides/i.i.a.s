import App from './App';
import './setupTest.js'

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});
