var rootElement = React.createClass({
    getInitialState() {
        
        return { showModal: false  };
    },
     //we can pass this method to modal component as property
    close:function() {
        this.setState({ showModal: false });
    },
    open: function() {
         this.setState({ showModal: true  });
    },
    render: function () {
        return React.DOM.div({ id: 'dvContainer', className: "container" },
            React.DOM.a({
                className: "btn btn-primary",
                href: "javascript:;", role: "button",
                onClick: this.open
            }, "Show modal"),
            Modal({ show: this.state.showModal, onHide: this.close  })
        );
    }
});
 
var Modal = React.createClass({

    render: function () {
        return React.DOM.div({
            className: "modal fade " + (this.props.show ? "in" : "out"), tabIndex: "-1",
            style: {  display: (this.props.show ? "block" : "none"), position: 'fixed' }, role: "dialog" },
             React.DOM.div({ className: "modal-dialog", role: "document" },
                React.DOM.div({ className: "modal-content"},
                    React.DOM.div({ className: "modal-header" },
                        React.DOM.button({ type: "button", className: "close",/* "data-dismiss": "modal",*/ "aria-label": "Close", onClick: this.props.onHide  },
                            React.DOM.span({ "aria-hidden": "true" },"X"  )),
                        React.DOM.h4({ className: "modal-title" },"Modal title")
                    ),
                    React.DOM.div({ className: "modal-body" },
                        React.DOM.p(null,"Simple modal dialog, only open and close functionality")
                    ),
                    React.DOM.div({
                        className: "modal-footer"
                    },
                        React.DOM.button({ className: "btn btn-default", onClick: this.props.onHide  , type:"button" /*, "data-dismiss":"modal"*/},"Close"),
                       React.DOM.button({ className:"btn btn-primary", type:"button" },"Save changes")
                    ) 
            )//modal-content
            )//modal-dialog

        )//modal fade
    }
});