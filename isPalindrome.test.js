const isPalindrome = require("./isPalindrome");

test("Tacocat is a palindrome", () => {
	expect(isPalindrome("Tacocat")).toBe(true);
});

test("Meow is not a palindrome", () => {
	expect(isPalindrome("Meow")).toBe(false);
});
