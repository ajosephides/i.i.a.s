import '../setupTest.js'
import RecipesList from '../components/RecipesList';
import { tsExternalModuleReference } from '@babel/types';


it('renders without crashing', () => {
  shallow(<RecipesList />)
});

describe('#onHandleSubmit', () => {
  test('retuns json data from the API call', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const setState = jest.fn()
    const wrapper = shallow(<RecipesList />);
    const event = {preventDefault: function(){}}
    const result = wrapper.instance().onHandleSubmit(event)
    expect(fetchSpy).toBeCalled();
  })
})

describe('#onHandleChange', () => {
  test('calls this.state to change ingredient state', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    const eventMock = {target: {name:'ing', value:'test'} }
    instance.onHandleChange(eventMock);
    expect(wrapper.state('ing')).toEqual('test');
  })
})

describe('#onHandleChangeAdd', () => {
  test('push the current ingredient into the ', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    wrapper.state.ing = 'test'
    instance.onHandleChangeAdd();
    expect(wrapper.state('ing')).toEqual('');
  });
  
  test('reset the state ing', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    wrapper.state.ing = 'test'
    instance.onHandleChangeAdd();
    expect(wrapper.state('ing')).toEqual('');
  })
})
