// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");
describe("polybius", () => {
    it("codes", () => {
      // More will go here
      const expected ='4432423352125413'
      const actual = polybius("thinkful");
      expect(actual).to.equal(expected);
    });
  it("decodes", () => {
      // More will go here
      const expected ='hello world'
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
    it("doesn't handle odd numbers of input", () => {
      // More will go here
      const expected =false
      const actual = polybius("44324233521254134",false);
      expect(actual).to.equal(expected);
    });
  });