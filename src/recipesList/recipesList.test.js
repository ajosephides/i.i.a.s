import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests"
import RecipesList from './recipesList';

it('renders without crashing', () => {
  shallow(<RecipesList/>);
});

it('display an image of a recipe', () => {
  const wrapper = shallow(<RecipesList />)
  expect(wrapper.text()).toEqual("P");
});

// it('returns beep'), () => {

// }
