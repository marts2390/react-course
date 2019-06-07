const app = {
    title: 'Visiblity Toggle',
    text: 'This is some text!',
    buttonTextHide: 'Hide Text',
    buttonTextShow: 'Show Text'
};

class VisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.toggleText = this.toggleText.bind(this);
        this.state = {
            visiblity: false
        }
    }
    toggleText() {
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{app.title}</h1>
                <button onClick={this.toggleText}>
                   {this.state.visiblity ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visiblity && (
                    <div>
                        <p>{app.text}</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'));


