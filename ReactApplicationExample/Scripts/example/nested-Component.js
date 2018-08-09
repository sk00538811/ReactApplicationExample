var buttonComponent = React.createClass({

    render: function () {
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary'
        }, "Submit")
        );
    }
});

var rootElement = React.createClass({

    render: function () {
        return React.DOM.div({ className: "col-md-4" },
            React.DOM.div({
                className: 'form-group'
            }, React.DOM.label({
                for: 'txtName'
            }, 'Enter Name'),
                React.DOM.input({ id: 'txtName', className: 'form-control' })),
            React.DOM.br(),
            React.DOM.div({ className: 'panel panel-default' }, 'child component',
                buttonComponent()
            )
        );
    }
});