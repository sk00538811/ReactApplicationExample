var buttonComponent = React.createClass({
    componentDidMount: function () {
        this.props.onRef(this);
    },
    componentWillUnmount: function () {
        this.props.onRef(undefined);
    },
    method :function() {
        debugger; 
        alert('we are here.'  );

    },

    render: function () {
        return React.DOM.div(null, React.DOM.div({
            className: 'btn btn-primary'
        }, "Submit")
        );
    }
});
const ChildWithStyles = withStyles()(buttonComponent);
var rootElement = React.createClass({ 
    
    callChildFunction : () => {
        debugger;
        this.child.method(); 
    },
    

    render: function () {
        return React.DOM.div({ className: "col-md-4" },
            React.DOM.div({
                className: 'form-group'
            }, React.DOM.label({
                    htmlFor : 'txtName'
            }, 'Enter Name'),
            React.DOM.input({ id: 'txtName', className: 'form-control' }),
            React.DOM.div({
                className: 'btn btn-warning', onClick: this.callChildFunction  
            }, "Invoke Child Method from parent"),
            React.DOM.br(),
            React.DOM.div({ className: 'panel panel-default' }, 'child component',
                buttonComponent({ onRef: ref =>  (this.ref = child) }) //ref => (this.child = ref)
            )
        ));
    }
});

function withStyles() {
    return function wrapWithStyles(ComposedComponent) {
        var WithStyles = React.createClass({
        render:function() {
            return ComposedComponent();
            }
        });
        return WithStyles();
    };
} ;

/*https://jsfiddle.net/frenzzy/z9c46qtv/3/
// Any higher-order component (HOC), for examle:
// withStyles https://github.com/kriasoft/isomorphic-style-loader
// connect https://github.com/reactjs/react-redux
// etc.
function withStyles() {
  return function wrapWithStyles(ComposedComponent) {
    return class WithStyles extends React.Component {
	    render() {
        return <ComposedComponent  />
      }
    }
  };
}
*/