// ================================
// JSON.stringify() EXAMPLES
// ================================

// 1. Basic Object
const obj1 = { name: "Vishwajeet", age: 21 };
console.log("1. Basic stringify:", JSON.stringify(obj1));

// 2. Array stringify
const arr = [1, 2, 3, "JS"];
console.log("2. Array stringify:", JSON.stringify(arr));

// 3. Nested Object
const obj2 = {
  name: "Vishu",
  skills: ["HTML", "CSS", "JS"],
  address: { city: "Jabalpur", state: "MP" }
};
console.log("3. Nested stringify:", JSON.stringify(obj2));

// 4. Replacer as ARRAY (filter keys)
const obj3 = { name: "A", age: 22, city: "Delhi" };
console.log(
  "4. Replacer array:",
  JSON.stringify(obj3, ["name", "city"])
);

// 5. Replacer as FUNCTION
const obj4 = { name: "A", age: 22 };
console.log(
  "5. Replacer function:",
  JSON.stringify(obj4, (key, value) => {
    if (key === "age") return value + 1;
    return value;
  })
);

// 6. Space parameter (pretty print)
console.log(
  "6. Pretty print:\n",
  JSON.stringify(obj1, null, 4)
);

// 7. Function ignored
const obj5 = {
  name: "A",
  greet: function () {
    console.log("Hi");
  }
};
console.log("7. Function ignored:", JSON.stringify(obj5));

// 8. Undefined ignored
const obj6 = { a: 1, b: undefined };
console.log("8. Undefined ignored:", JSON.stringify(obj6));

// 9. Date to string
const obj7 = { today: new Date() };
console.log("9. Date stringify:", JSON.stringify(obj7));

// 10. Circular reference (ERROR example)
const obj8 = {};
obj8.self = obj8;
try {
  JSON.stringify(obj8);
} catch (e) {
  console.log("10. Circular reference error:", e.message);
}

// ================================
// JSON.parse() EXAMPLES
// ================================

// 11. Basic parse
const json1 = '{"name":"A","age":22}';
const parsed1 = JSON.parse(json1);
console.log("11. Basic parse:", parsed1);

// 12. Parse array
const json2 = '[1,2,3,"JS"]';
console.log("12. Parse array:", JSON.parse(json2));

// 13. Reviver function
const json3 = '{"name":"A","age":22}';
const parsed2 = JSON.parse(json3, (key, value) => {
  if (key === "age") return value * 2;
  return value;
});
console.log("13. Reviver function:", parsed2);

// 14. Convert string to Date
const json4 = '{"date":"2026-01-23T10:00:00.000Z"}';
const parsed3 = JSON.parse(json4, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});
console.log("14. Date revived:", parsed3.date);
console.log("Is Date object?", parsed3.date instanceof Date);

// 15. Invalid JSON error
try {
  JSON.parse("{name:'A'}");
} catch (e) {
  console.log("15. Invalid JSON error:", e.message);
}

// ================================
// REAL WORLD: localStorage (Browser only)
// ================================
if (typeof localStorage !== "undefined") {
  // Save
  localStorage.setItem(
    "user",
    JSON.stringify({ name: "Vishu", age: 21 })
  );

  // Get
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("16. localStorage data:", user);
}

