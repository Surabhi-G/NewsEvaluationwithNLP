import {checkForURL} from '../client/js/nameChecker'


describe('Test, the function "checkForURL()" should exist' , () => {
    test('It should return true', async () => {
        expect(checkForURL).toBeDefined();
    });
});
describe('Test, the function "checkForURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof checkForURL).toBe("function");
    });
});

describe('Test, the function "checkForURL()" for valid url' , () => {
    var myURL = "https://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return true', async () => {
        const response = checkForURL(myURL);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});
describe('Test "checkForURL()" for invalid url' , () => {
    // I replaced 'https' with 'htpshttps' to make it invalid
    var myURL = "htpshttps://www.skillsyouneed.com/ips/dealing-with-criticism.html";
    test('It should return false', async () => {
        const response = checkForURL(myURL);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});
