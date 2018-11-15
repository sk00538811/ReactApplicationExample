
var buttonComponent = React.createClass({
    propTypes: {
        data: React.PropTypes.string
    },
    handleEvent: function (e) {
        this.props.method();
        alert('clicked on button:' + this.props.data);

    },
     componentWillReceiveProps: function (nextProps) {
         if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) // Check if it's a new data, you can also use some unique property, like the ID
         {
             alert('child component data change old:' + this.props.data + ',  new:' + nextProps.data)
         }
     },
    
    render: function () {
        debugger;
        var strdate = this.props.data;
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary', onClick: this.handleEvent
        }, "Submit"
        ),
            React.DOM.br(),
            React.DOM.label({ className: 'text text-success' }
                , strdate
            )
        );
    }
});
var rootElement = React.createClass({
    propTypes: {
        date: React.PropTypes.object
    },
    getDefaultProps: function () {
        return { strDate: new Date().toLocaleTimeString() };
    },

    getUpdatedDate: function (e) {
        return { strDate: new Date().toLocaleTimeString() };

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
                React.DOM.label({ className: 'text text-warning' }, this.getUpdatedDate().strDate)
                ,
                React.DOM.br(),
                React.DOM.div({ className: 'panel panel-default' }, 'child component',
                    buttonComponent({ data: this.getUpdatedDate().strDate, method: this.getUpdatedDate })
                )
            ));
    }
});
var buttonComponent = React.createClass({
    propTypes: {
        data: React.PropTypes.string
    },
    handleEvent: function (e) {
        alert('clicked on button:' + this.props.method().strDate );

    },
    componentWillReceiveProps:function(nextProps) {
        if (JSON.stringify(this.props.data ) !== JSON.stringify(nextProps.data)) // Check if it's a new data, you can also use some unique property, like the ID
        {
            alert('child component data change old:' + this.props.data+',  new:'+nextProps.data)
        }
    }, 

    render: function () {
        debugger;
        var strdate = this.props.data;
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary', onClick: this.handleEvent
        }, "Submit"
        ),
            React.DOM.br(),
            React.DOM.label({ className: 'text text-success' }
                , strdate
            )
        );
    }
});
