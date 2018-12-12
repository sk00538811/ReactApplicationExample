

var rootElement = React.createClass({
    getInitialState: function () {
        return { date: new Date() };
    },
    handleClick: function (e) {
        this.setState({ date: new Date() });
        alert('state change');
    },
    render: function () {
        return React.DOM.div({ className: "row" },
            React.DOM.div({ className: "col-md-4" },
                React.DOM.div({
                    className: 'form-group'
                }, React.DOM.label({
                    htmlFor: 'txtName'
                }, 'Enter Name'),
                    React.DOM.input({ id: 'txtName', className: 'form-control' })),
                React.DOM.br(),
                React.DOM.label({ className: 'text text-success' },
                    this.state.date.toLocaleTimeString()),
                React.DOM.br(),
                React.DOM.div(null, React.DOM.div({
                    className: 'btn btn-primary', onClick: this.handleClick
                }, "Submit")
                )
            )
        );
    }
});