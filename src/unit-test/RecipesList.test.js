import '../setupTests.js'
import RecipesList from '../components/RecipesList';
import { tsExternalModuleReference } from '@babel/types';


it('renders without crashing', () => {
  shallow(<RecipesList />)
});

describe('#onHandlesubmit', () => {
  test.todo('retuns json data from the API call'), () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    const recipe_list = shallow(<RecipesList />);
    expect(fetchSpy).toBeCalled();
  };
});
