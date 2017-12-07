import { CurrencyPipe } from "./currency.pipe";

describe("CurrencyPipe", () => {
  it("create an instance", () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it("should return transformed value", () => {
    const pipe = new CurrencyPipe();
    expect(pipe.transform("10.00", 2)).toEqual("5.00");
  });
});
