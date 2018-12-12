
var dropdownComponent = React.createClass({

    getItems: function () {
        var data = this.props.state.data;
        var items = [];
        alert(data.length);
        for (var i = 0; i < data.length; i++) {
            items.push(this.getItem(data[i]));
        }
        return items;
    },
    getItem: function (o) {
        return React.DOM.option({ key: o.name, value: o.code }, o.name);
    },

    render: function () { 
        return (React.DOM.select(null,
            this.getItems()
        )); 
    }
});

var countryDropdown = React.createClass({

    render: function () {
        return React.DOM.div(dropdownComponent({ state: this.props.countries }));
    }
});

var rootElement = React.createClass({
    getInitialState: function () {
        return {
            countries: []
        };
    },

    componentDidMount: function () {
        var initialdatas = [];
        fetch('../scripts/JSONData/DowpdownData.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => {
                initialdatas = data.map((o) => {
                    return o
                });
                console.log(initialdatas);
                this.setState({
                    countries: [{ code: '', name: '<---Select --->' }].concat(initialdatas),
                });
            });
    },
    getItems: function () {
        var data = this.state.countries;
        var items = [];
        for (var i = 0; i < data.length; i++) {
            items.push(this.getItem(data[i]));
        }
        return items;
    },
    getItem: function (o) {
        return React.DOM.option({ key: o.name, value: o.code }, o.name);
    },
    renderOption: function () {
        /**/var countries = this.state.countries;
        var optionItems = countries.map((o) =>
            React.DOM.option({ key: o.name, value: o.code },o.name)
        ); 
        return  optionItems;
         
    },
    renderSelect: function () { 
        return (React.DOM.select(null,
            this.renderOption()
        ));
    },
    render: function () {
        return React.DOM.div(null, React.DOM.br() , this.renderSelect());
    }
})
