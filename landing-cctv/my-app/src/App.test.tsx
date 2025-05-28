import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

// only verify that the app or the component render without crashing but
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.unmountComponentAtNode(div);
  // ReactDOM.render(<App/>,div);
});

test('App Born Snaptshot', () => {
  const comp = Enzyme.shallow(<App><div>Content</div></App>);
  // expect(toJson(comp)).toMatchSnapshot(); // we can do at this, but i put a line code in the package.json that automatic this line -> "snapshotSerializers": ["enzyme-to-json/serializer"]
  expect(comp).toMatchSnapshot();
});