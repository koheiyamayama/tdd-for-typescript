import { VendingMachine } from "./src/VendingMachine";

test("コーラを返す", () => {
  const vendingMachine = new VendingMachine();
  expect(vendingMachine.dispense()).toEqual("コーラ");
});
