import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

export const doTestMount = (testName:string, reactComponent:any) => {
    test(testName,() => {
        const shall = Enzyme.shallow(reactComponent);
        expect(shall).toMatchSnapshot();
    });
}
