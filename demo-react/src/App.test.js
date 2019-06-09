import React from 'react';
import renderer from "react-test-renderer";
import App from './App';


test('spanshot test ', () => {
  const component = renderer.create(<App></App>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})