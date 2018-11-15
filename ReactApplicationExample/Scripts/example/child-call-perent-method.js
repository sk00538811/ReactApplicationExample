
var buttonComponent = React.createClass({
    propTypes: {
        date: React.PropTypes.object
    },
    handleEvent: function (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        var strdate = this.props.method().date.toLocaleTimeString();
        alert('buttonComponent clicked on button:' + strdate);
        debugger;
        this.props.perentmethod( strdate);
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
        return { date: new Date() };
    },

    getUpdatedDate: function (e) {
        return { date: new Date() };

    },
     getInitialState: function () {
        return { statedate: new Date().toLocaleTimeString() };
    },
   localMethod: function (value) {
       this.setState({ statedate:value   }); 
    },
    render: function () {
        return React.DOM.div({ className: "col-md-4 panel panel-primary" },
            
            React.DOM.label({ className: 'text text-warning' }, this.getUpdatedDate().date.toLocaleTimeString())
            ,
            React.DOM.br(), 
            React.DOM.div({ className: 'panel panel-default'  },'child component',
                buttonComponent({ data: this.getUpdatedDate(), method: this.getUpdatedDate, perentmethod: this.localMethod })
                ),
             React.DOM.br(),
            React.DOM.label({ className: 'text text-primary' }, 'perant method return value',
                React.DOM.label({ className: 'text text-success' }, this.state.statedate ))
            ,
        );
    }
});