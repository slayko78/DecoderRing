// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");
describe("codes", () => {
    it("codes", () => {
      // More will go here
      const expected ='jrufscpw'
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("codes", () => {
      // More will go here
      const expected ='elp xhm xf mbymwwmfj dne'
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
   });