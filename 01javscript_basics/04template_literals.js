// Template literals (Template strings).

// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

// Template literals are sometimes informally called template strings.

// An expression to be inserted in the current position, whose value is converted to a string or passed to tagFunction.

const Template_Literal_example = `hey shivam\n`;

let num = 5;
const temp1 = `you are working ${num} with template literal
               IS there any problem!`;

console.log(Template_Literal_example, temp1);

// Note:-: Template literal was introduced in 2015 (also known as ECMASCRIPT 6 or ES6 or ECMAScript 2015). Some browsers may not support the use of template literals.
