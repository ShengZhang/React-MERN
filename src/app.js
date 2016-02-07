
var BugFilter = React.createClass({
    console.log("Rendering BugFilter");
    render: function(){
        return(
            <div> A way to filter the list of bugs would come here. </div>
        );
    }
});

var BugAdd = React.createClass({
    console.log("Rendering BugAdd");
    render: function(){
        return(
            <div> BugAdd. </div>
        );
    }
});

var BugRow = React.createClass({
    console.log("Rendering BugRow:", this.props.bug);
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
    console.log("Rendering bug table, num items:", this.props.bugs.length);
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
        console.log("Rendering bug list, num items:", this.state.bugs.length);
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.data}/>
                <button onClick={this.testNewBug}><Add Bug></button>
                <hr />
                <BugAdd />
            </div>
        ),

        testNewBug: function() {
            var nextId = this.state.bugs.length + 1;
            this.addBug({id: nextId, priority: 'P2', status:'New', owner:'Pieta', title:'Warning on console'})
        },

        addBug: function(bug) {
            console.log("Adding bug:", bug);
            // We're advised not to modify the state, it's immutable. So, make a copy.
            var bugsModified = this.state.bugs.slice();
            bugsModified.push(bug);
            this.setState({bugs: bugsModified});
        }
    }

});

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);