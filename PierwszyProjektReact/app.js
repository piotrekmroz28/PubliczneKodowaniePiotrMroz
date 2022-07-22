console.log('Hello World');

let par = React.createElement(
    "p",
    null,
    "To jest par z React"
);

let apka = document.getElementById('apka');

ReactDOM.render(par, apka);