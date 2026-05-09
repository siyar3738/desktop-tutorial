import jwt from "jsonwebtoken";

// Secret key
const secretKey = "mysecretkey";

// Random user data
const randomId = Math.floor(Math.random() * 10000);
const randomName = "User" + Math.floor(Math.random() * 100);

// Create token
const token = jwt.sign(
  {
    id: randomId,
    name: randomName
  },
  secretKey,
  { expiresIn: "1h" }
);

console.log("Generated Token:");
console.log(token);

// Verify token
const decoded = jwt.verify(token, secretKey);

console.log("\nDecoded Data:");
console.log(decoded);