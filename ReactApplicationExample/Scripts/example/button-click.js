var rootElement = React.createClass({
    handleEvent: function (e) {
        alert('clicked on button');
    },

    render: function () {
        return React.DOM.div(null,
            React.DOM.div({  className: 'btn btn-primary', onClick:this.handleEvent  },
            "Submit")
        );
    }
});