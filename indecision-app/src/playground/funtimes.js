const appRoot = document.getElementById('app');

const app = {
    options: ['option 1', 'option 2', 'option 3'],
    title: 'This is for some fun',
}

const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        <ol>
            <li>{app.options[0]}</li>
            <li>{app.options[1]}</li>
            <li>{app.options[2]}</li>
        </ol>
        <button>Add an option</button>
    </div>
);

console.log(options);

ReactDOM.render(template, appRoot);
};

render();