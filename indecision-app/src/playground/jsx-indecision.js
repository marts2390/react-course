
const app = {
    title: 'Indecision App',
    sub: 'Put your live in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

    renderTemplate();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
   alert(option);
}


const renderTemplate = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.sub && <p>{app.sub}</p>}
        <p>{app.options.length > 0 ? 'Here are not your Options' : 'You Have No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
            {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
    </div>
);

ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderTemplate();
