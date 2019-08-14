import '../setupTest.js'
import Ingredients from '../components/Ingredients';
import fetch from '../unit-test/mocks/ingredientFetch';
global.fetch = fetch;

it('renders without crashing', () => {
  shallow(<Ingredients />)
});

describe('#onComponentDidMount', () => {
  test('calls fetch once called', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const setState = jest.fn()
    const wrapper = shallow(<Ingredients id={1}/>);
    wrapper.instance().componentDidMount()
    expect(fetchSpy).toBeCalled();
  })
});
