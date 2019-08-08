import App from './App';
import './setupTests.js'

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});
