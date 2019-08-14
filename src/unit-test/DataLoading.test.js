import DataLoading from '../components/DataLoading';
import '../setupTest.js'

it('returns null if its prop is false', () => {
  const wrapper = shallow(<DataLoading showDataLoading={ false }/>);
  expect(wrapper.text()).toBe('');
});

it('returns the correct message if its prop is false', () => {
  const wrapper = shallow(<DataLoading showDataLoading={ true }/>);
  expect(wrapper.text()).toBe('Please wait while we get the data from our partners.....');
});
