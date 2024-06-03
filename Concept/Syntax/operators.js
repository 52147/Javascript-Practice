// Arithmetic Operators
// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%)
// Exponentiation (**)
// Increment (++)
// Decrement (--)
let a = 10;
let b = 20;
let sum = a + b;
let diff = b - a;
let product = a * b;
let quotient = b / a;
let remainder = b % a;
let power = a ** 2;
a++; // Increment
b--; // Decrement

// Comparison Operators
// Equal (==)
// Strict Equal (===)
// Not Equal (!=)
// Strict Not Equal (!==)
// Greater Than (>)
// Less Than (<)
// Greater Than or Equal (>=)
// Less Than or Equal (<=)
let isEqual = (a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterOrEqual = (a >= b);
let isLessOrEqual = (a <= b);


// Logical Operators
// AND (&&)
// OR (||)
// NOT (!)
let andCondition = (a > 5 && b < 25);
let orCondition = (a > 5 || b > 25);
let notCondition = !(a > 5);

// Bitwise Operators
// AND (&)
// OR (|)
// NOT (~)
// XOR (^)
// Left Shift (<<)
// Right Shift (>>)
// Zero-fill Right Shift (>>>)
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseNot = ~a;
let bitwiseXor = a ^ b;
let leftShift = a << 2;
let rightShift = a >> 2;
let zeroFillRightShift = a >>> 2;

// Assignment Operators
// Assignment (=)
// Addition Assignment (+=)
// Subtraction Assignment (-=)
// Multiplication Assignment (*=)
// Division Assignment (/=)
// Modulus Assignment (%=)
// Exponentiation Assignment (**=)
// Bitwise AND Assignment (&=)
// Bitwise OR Assignment (|=)
// Bitwise XOR Assignment (^=)
// Left Shift Assignment (<<=)
// Right Shift Assignment (>>=)
// Zero-fill Right Shift Assignment (>>>=)
let c = 5;
c += 3; // c = c + 3;
c -= 2; // c = c - 2;
c *= 2; // c = c * 2;
c /= 2; // c = c / 2;
c %= 3; // c = c % 3;
c **= 2; // c = c ** 2;
c &= 1; // c = c & 1;
c |= 2; // c = c | 2;
c ^= 3; // c = c ^ 3;
c <<= 1; // c = c << 1;
c >>= 1; // c = c >> 1;
c >>>= 1; // c = c >>> 1;

// Ternary Operator
// Conditional (? :)
let result = (a > b) ? "a is greater" : "b is greater";
