var rootElement = React.createClass({
    handleEvent: function (e) {
        alert('clicked on button');
    },

    render: function () {
        var html = "<h2>An Unordered HTML List</h2>"
            + "<ul >"
            + "<li>Coffee</li>"
            + "<li>Tea</li>"
            + "<li>Milk</li>"
            + "</ul >";
        return React.DOM.div(null,
            React.DOM.div({ className: 'btn btn-primary', onClick: this.handleEvent },
                "Submit"),
            PopoverButton({
                buttontitle: "my popover button", popoverheader: "surendra", popoverbody: html,
                popoverstyle: "width: 600px; max-width:900px" /*500px*/,

                popoverplacement: "bottom" /*right*/,
                trigger: "click"/* "hover" */
            })
        );
    }
});
var PopoverButton = React.createClass({
    displayName: 'PopoverButton',

    componentDidUpdate: function () {
        this.initializePopovers();
    },

    componentDidMount: function () {
        this.initializePopovers();
    },
    //this fuction return popover template
    getPopovertemplate: function () {
        var popoverstyle = "width: 600px; max-width:900px";
        if (this.props.popoverstyle !== undefined && this.props.popoverstyle !== null)
            popoverstyle = this.props.popoverstyle;
        var template =
            '<div class="popover" role="tooltip" style="' + popoverstyle + '">'
            + ' <div class="arrow" ></div >'
            + ' <h3 class="popover-title"></h3>'
            + ' <div class="popover-content">'
            + '     <div class="data-content"></div>'
            + ' </div>'
            + '</div > ';

        return template;
    },
    initializePopovers: function () {
        $(this.getDOMNode()).popover({
            // selector: '[rel="popover"]',
            // trigger: 'click', 
            template: this.getPopovertemplate(),
            trigger: this.props.trigger,
            placement: this.props.popoverplacement /*'bottom'*/,
            html: true,
            container: 'body'
        }); 
    },

    componentWillUnmount: function () {
        $(this.getDOMNode()).popover('destroy');
    },

    render: function () {
        return (
            React.DOM.button({
                type: "button", className: "btn btn-default btn-sm shared-btn shared-to",
                rel: "popover",
                'data-toggle': "popover",
                'data-title': this.props.popoverheader,
                'data-content': this.props.popoverbody
            },
                React.DOM.span({ className: "btn btn-denger" }), this.props.buttontitle
            )
        );
    }
});
