import '../setupTests.js'
import RecipesList from '../components/RecipesList';
import { tsExternalModuleReference } from '@babel/types';


it('renders without crashing', () => {
  shallow(<RecipesList />)
});

describe('#onHandlesubmit', () => {
  test('retuns json data from the API call', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const setState = jest.fn()
    const recipe_list = shallow(<RecipesList />);
    const event = {preventDefault: function(){}}
    const result = recipe_list.instance().onHandleSubmit(event)
    expect(fetchSpy).toBeCalled();
  })
})
