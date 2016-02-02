
var BugFilter = React.createClass({
    render: function(){
        return(
            <div> A way to filter the list of bugs would come here. </div>
        );
    }
});

var BugAdd = React.createClass({
    render: function(){
        return(
            <div> BugAdd. </div>
        );
    }
});

var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.bug.id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
    render: function(){
        var bugRows = this.props.bugs.map(function(bug){
            return <BugRow key={bug.id} bug={bug} />
        });

        return(
            <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Owner</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {bugRows}
                </tbody>
            </table>
        );
    }
});

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status:'New', owner:'Eddie', title:'Misaligned border on panel'},
];

var BugList = React.createClass({
    getInitialState: function(){
        return {data:bugData};
    },
    render: function(){
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.data}/>
                <button onClick={}><Add Bug></button>
                <hr />
                <BugAdd />
            </div>
        );
    }

});

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);

// ReactDOM.render(
// <h1>Hello, world - Victor!</h1>,
// document.getElementById('example')
// );

