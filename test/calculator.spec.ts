import { expect } from "chai";
import Calculator from "../src/Calculator";

describe("Test Calculator Class", () => {
  it("Should return sum", () => {
    //arrange
    const calc = new Calculator();
    //act
    const result = calc.add(2, 3);
    //assert
    expect(result).to.equal(5);
  });
  it("Should return substract", () => {
    //arrange
    const calc = new Calculator();
    //act
    const result = calc.substract(5, 3);
    //assert
    expect(result).to.equal(2);
  });
  it("Should return multiply", () => {
    //arrange
    const calc = new Calculator();
    //act
    const result = calc.multiply(2, 3);
    //assert
    expect(result).to.equal(6);
  });
  it("Should return divide", () => {
    //arrange
    const calc = new Calculator();
    //act
    const result = calc.divide(9, 3);
    //assert
    expect(result).to.equal(3);
  });
  it("Should throw an error by divide zero", () => {
    //arrange
    const calc = new Calculator();
    //assert
    expect(() => calc.divide(10, 0)).to.throw("Can not divide by zero!");
  });
});
