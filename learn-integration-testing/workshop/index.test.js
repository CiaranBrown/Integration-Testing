test("Adding numbers", () => {
  equal(calculate(1, "+", 2), 3);
  equal(calculate(10, "+", 30), 40);
});

test("Subtracting numbers", () => {
  equal(calculate(3, "-", 2), 1);
  equal(calculate(30, "-", 15), 15);
});
  
test("Multiplying numbers", () => {
  equal(calculate(4, "*", 3), 12);
  equal(calculate(12, "*", 12), 144);
});
  
test("Dividing numbers", () => {
  equal(calculate(4, "/", 2), 2);
  equal(calculate(100, "/", 5), 20);
});
  
test("Errors for invalid sign", () => {
  equal(calculate(4, "£", 2), "Please enter a valid sign (+, -, *, /)");
});
  
test("Can add string numbers", () => {
  equal(calculate("1", "+", "2"), 3);
});