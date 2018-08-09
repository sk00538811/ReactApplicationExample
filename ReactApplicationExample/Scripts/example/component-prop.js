
var buttonComponent = React.createClass({
    propTypes: {
        date: React.PropTypes.object
    },
    handleEvent: function (e) {
        alert('clicked on button:' + this.props.method().date.toLocaleTimeString());
        
    },

    render: function () {
        debugger;
        var strdate = this.props.data.date.toLocaleTimeString()
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary', onClick: this.handleEvent
        }, "Submit"
        ),
        React.DOM.br(),
        React.DOM.label({ className: 'text text-success' }
        ,strdate
        )
        );
    }
});
var rootElement = React.createClass({
    propTypes: {
        date: React.PropTypes.object
    },
    getDefaultProps:function() {
    return {date: new Date()};
    },
    
    getUpdatedDate: function (e) {
      return  { date: new Date() };
       
    },
    render: function () {
        return React.DOM.div({ className: "col-md-4" },
            React.DOM.div({
                className: 'form-group'
            }, React.DOM.label({
                for: 'txtName'
            }, 'Enter Name'),
        React.DOM.input({ id: 'txtName', className: 'form-control' })),
        React.DOM.br(),
        React.DOM.label({ className: 'text text-warning' }, this.getUpdatedDate().date.toLocaleTimeString())
        ,
        React.DOM.br(),
        React.DOM.div({ className: 'panel panel-default' }, 'child component',
            buttonComponent({ data: this.getUpdatedDate(), method: this.getUpdatedDate })
       )
        );
    }
});