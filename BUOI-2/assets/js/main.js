//  Voi HTML Co ban

// Truy cap phan tu
// let elRoot = document.querySelector("#root");
// let elHtml = document.createElement("h1");
// elHtml.innerHTML = "Hello React!";


// document.body.appendChild(elHtml);



// Voi React
// let el = React.createElement("h1", { className: "title"}, "Hello React");


let el = (
  <h1 className="title">Hello 500 anh em!</h1>
);


// Hien thi ra ben ngoai giao dien
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(el);