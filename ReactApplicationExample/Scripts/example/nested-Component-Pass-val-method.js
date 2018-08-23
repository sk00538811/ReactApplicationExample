var buttonComponent = React.createClass({

    clickEvent: function () {
        debugger;
        var nv = this.props.parentPassVal;
        var nmv = this.props.parentPassMethod(200);
        var s = this.props.nameProp;
        alert('we are here.' + s + '\nthis.props.parentPassVal :' + n +'\nInvoke Perent Method with argument\nthis.props.parentPassMethod(200)'+nmv);

    },

    render: function () {
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary', onClick: this.clickEvent
        }, "Submit")
        );
    }
});

var rootElement = React.createClass({

    computeval: function (p) {
        debugger;
        return 10 + p;
    },

    render: function () {
        return React.DOM.div({ className: "col-md-4" },
            React.DOM.div({
                className: 'form-group'
            }, React.DOM.label({
                    htmlFor : 'txtName'
            }, 'Enter Name'),
                React.DOM.input({ id: 'txtName', className: 'form-control' })),
            React.DOM.br(),
            React.DOM.div({ className: 'panel panel-default' }, 'child component',
                buttonComponent({ nameProp: "surendra KT session", parentPassVal: this.computeval(0),parentPassMethod :this.computeval})
            )
        );
    }
});

