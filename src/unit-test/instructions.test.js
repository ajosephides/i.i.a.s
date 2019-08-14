import '../setupTest.js'
import Instructions from '../components/Instructions';
import fetch from '../unit-test/mocks/instructionFetch';
global.fetch = fetch;

it('renders without crashing', () => {
  shallow(<Instructions />)
});

describe('#componentDidMount', () => {
  test('calls fetch once called', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const setState = jest.fn()
    const wrapper = shallow(<Instructions id={1}/>);
    wrapper.instance().componentDidMount()
    expect(fetchSpy).toBeCalled();
  })
});

// describe('#componentWillUnmount', () => {
//   test('calls abortController', () => {
//     const wrapper = shallow(<Instructions id={1}/>);
//     const abortSpy = jest.spyOn(wrapper.instance(), 'abortController')
//     wrapper.instance().componentWillUnmount()
//     expect(abortSpy).toBeCalled();
//   })
// })
