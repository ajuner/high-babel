const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
function compile(code) {
  const ast = parser.parse(code);
  traverse.default(ast, {
    enter(path) {
      if(path.isIdentifier({name: "a"})) {
        path.node.name = "b"
      }
    }
  });
  return generator.default(ast, {}, code);
}

const code = `
function a() {
  console.log("123")
}
`;
const newCode = compile(code)

console.log(newCode.code)