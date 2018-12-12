var rootElement = React.createClass({
    getInitialState() {
        
        return { showModal: false, modalHTMLBody: "<p>sample text</p>", modalOpenount:0 };
    },
    //we can pass this method to modal component as property
    close:function(e, count) {
        this.setState({ showModal: false, modalOpenount: count });
    },
    open: function() {
        var tempHTML = "<div>This html text is passed from perent component <br/><br/><a href='javascript:;'>Modal Dialog open count <span class='badge'>"+this.state.modalOpenount+"</span></a><br></div>";
        this.setState({ showModal: true, modalHTMLBody:tempHTML });
    },
    render: function () {
        return React.DOM.div({ id: 'dvContainer', className: "container" },
            React.DOM.a({
                className: "btn btn-primary",
                href: "javascript:;", role: "button",
                onClick: this.open
            }, "Show modal"),
            Modal({ show: this.state.showModal, onHide: this.close, bodyHTML: this.state.modalHTMLBody,openCount:this.state.modalOpenount })
        );
    }
});
 
var Modal = React.createClass({

    closeHandler: function (e) { 
        var count = this.props.openCount + 1;
        //now call perant method and pass argument
        this.props.onHide(e,count);
    },
    render: function () {
        return React.DOM.div({
            className: "modal fade " + (this.props.show ? "in" : "out"), tabIndex: "-1",
            style: {  display: (this.props.show ? "block" : "none"), position: 'fixed'}, role: "dialog" },
            React.DOM.div({ style: { position: 'fixed', zIndex: 1040, top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#000', opacity: 0.5 }, onClick: this.closeHandler } ),
            React.DOM.div({ className: "modal-dialog", role: "document" },
                React.DOM.div({ className: "modal-content"},
                    React.DOM.div({ className: "modal-header" },
                        React.DOM.button({ type: "button", className: "close",/* "data-dismiss": "modal",*/ "aria-label": "Close", onClick: this.closeHandler  },
                            React.DOM.span({ "aria-hidden": "true" },"X"  )),
                        React.DOM.h4({ className: "modal-title" },"Modal title")
                    ),
                    React.DOM.div({ className: "modal-body", dangerouslySetInnerHTML: { __html:this.props.bodyHTML} }
                       //,React.DOM.p(null,"One fine body&hellip;")
                    ),
                    React.DOM.div({
                        className: "modal-footer"
                    },
                        React.DOM.button({ className: "btn btn-default", onClick: this.closeHandler  , type:"button" /*, "data-dismiss":"modal"*/},"Close"),
                       React.DOM.button({ className:"btn btn-primary", type:"button" },"Save changes")
                    ) 
            )//modal-content
            )//modal-dialog

        )//modal fade
    }
});