const numbers = ['Home','Profile', 'Message','About', 'Help'];
var listItems = React.createClass({
    getItems: function () {
        var items = [];
        for (var i = 0; i < numbers.length; i++) {
            items.push(this.renderItem(numbers[i]));
        }
        return items;
    },
    getItem: function (label) {
        return (React.DOM.li({ role: "presentation" },
            React.DOM.a({ href: "#" }, label)
        )
        );
    },
    render: function () {
        debugger;
        return React.DOM.div(null, this.getItems());
    }
});
var rootElement = React.createClass({

    render: function () {
        debugger;
        return React.DOM.ul({ className: "nav nav-pills nav-stacked" },
            listItems()  
        );
    }
});