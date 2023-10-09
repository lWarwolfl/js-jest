const shallowObjectCopy = require("./shallowObjectCopy");

test("Create a clone of the object parameters", () => {
	const testObject = {name: "Sina", age: 22}
	expect(shallowObjectCopy(testObject)).toStrictEqual(testObject);
});
