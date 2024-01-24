// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "HEllo world from REact"
// );

const ele = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
console.log("ele", ele);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

var close = outest()("helloworld");
close();
