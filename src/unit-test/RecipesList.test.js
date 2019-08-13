import '../setupTest.js'
import RecipesList from '../components/RecipesList';
import { tsExternalModuleReference } from '@babel/types';


it('renders without crashing', () => {
  shallow(<RecipesList />)
});

describe('#onHandleSubmit', () => {
  it('retuns json data from the API call', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const setState = jest.fn()
    const wrapper = shallow(<RecipesList />);
    const event = {preventDefault: function(){}}
    const result = wrapper.instance().onHandleSubmit(event)
    expect(fetchSpy).toBeCalled();
  })
})

describe('#onHandleChange', () => {
  it('calls this.state to change ingredient state', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    const eventMock = {target: {name:'ing', value:'test'} }
    instance.onHandleChange(eventMock);
    expect(wrapper.state('ing')).toEqual('test');
  })
})

describe('#onHandleChangeAdd', () => {
  it('push the current ingredient into the array', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    instance.state.ing = 'test'
    instance.onHandleChangeAdd();
    expect(instance.state.ingredients).toEqual(['test']);
  });
  
  it('reset the state ing', () => {
    const wrapper = shallow(<RecipesList />);
    const instance = wrapper.instance()
    instance.state.ing = 'test'
    instance.onHandleChangeAdd();
    expect(instance.state.ing).toEqual('');
  })
})
