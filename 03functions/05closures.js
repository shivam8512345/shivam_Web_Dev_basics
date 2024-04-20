// Closures in javasript.

// Closures is the combination of a function bundled together (enclosed) with reference to its surrounding states(the lexical environment).

// In other Words closures give you accesss to an outer functions scope from an Inner functions.

// This is what closure Is!.
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
z();

// functions are heart of javascript!.

// you can also return the function outside.

// javascript is synchronus!.
