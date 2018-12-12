var inputComponent = React.createClass({


    render: function () {
        return React.DOM.div({
            className: 'form-group', style: { border: "1px solid blue" }
        }, "Input Component",
            React.DOM.br(),
            React.DOM.label({
                htmlFor : 'txtName'
            }, 'Enter Name'),
            React.DOM.input({
                id: 'txtName', className: 'form-control',
                value: this.props.inputName, onChange: this.props.onChangeEvent
            }), React.DOM.br(),
            React.DOM.label({
                className: 'text text-warning'
            }, "Pass value:" + this.props.passname)

        );

    }
});
var displayComponent = React.createClass({
    handleClickPassVal: function (e) {
        alert('displayComponent click button');
        this.props.onClickEvent(e, 'Singh');
    },
    render: function () {
        return React.DOM.div({
            className: 'form-group', style: { border: "1px solid green" }
        }, "Display Component",
            React.DOM.br(),
            React.DOM.label({
                className: 'text text-success'
            }, 'My Name :', this.props.inputname),
            React.DOM.input({
                type: 'hidden'
                , value: this.props.passname
            }),
            React.DOM.br(),
            React.DOM.div({ id: 'dvmain', className: "btn btn-warning", onClick: this.handleClickPassVal },
                'click to pass "Singh" to input component'
            )
        );
    }
});


var rootElement = React.createClass({
    getInitialState: function () {
        return {
            mypassname: this.props.passmyname,
            myinputname: this.props.inputmyname

        };
    },
    changeName: function (event) {
        alert('parent input change');
        this.setState({ myinputname: event.target.value });
    },
    passNameVal: function (e, val) {
        alert('parent passVal ' + val);
        this.setState({ mypassname: val });
    },
    render: function () {
        return React.DOM.div({ className: "row" ,style: { border: "1px solid red" }},  'Parent component',React.DOM.br(),
            React.DOM.div({ className: "col-md-4"  },
                React.DOM.br(),
                React.DOM.div({ className: 'panel panel-default' }, 
                    React.DOM.br(),
                    inputComponent({
                        inputName: this.state.myinputname, passname: this.state.mypassname, onChangeEvent: this.changeName
                    }),
                    React.DOM.br(),
                 )
            ),
            React.DOM.div({ className: "col-md-4"  },
                React.DOM.br(),
                React.DOM.div({ className: 'panel panel-default' },  
                    React.DOM.br(), 
                    displayComponent({ inputname: this.state.myinputname, passname: this.state.mypassname, onClickEvent: this.passNameVal })
                    ,React.DOM.br()
                )
            ));
    }
});