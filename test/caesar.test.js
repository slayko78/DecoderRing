// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");
describe("caesar", () => {
    it("handles right shift", () => {
      // More will go here
      const expected ='wklqnixo'
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
  it("handles left shift", () => {
      // More will go here
      const expected ='qefkhcri'
      const actual = caesar("thinkful", -3);
      expect(actual).to.equal(expected);
    });
    it("false if shift not put in", () => {
      // More will go here
      const expected =false
      const actual = caesar("thinkful");
      expect(actual).to.equal(expected);
    });
});
