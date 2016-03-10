
var BugFilter = React.createClass({
    
    render: function(){ 
        console.log("Rendering BugFilter");
        return(
            <div> A way to filter the list of bugs would come here.</div>
        )
    }
});

var BugAdd = React.createClass({
    
    render: function(){
        console.log("Rendering BugAdd");
        return(
            <div>
                <form name="bugAdd">
                    <input type="text" name="owner" placeholder="Owner" />
                    <input type="text" name="title" placeholder="Title" />
                    <button onClick={this.handleSubmit}>Add Bug</button>
                </form>
            </div>    
        );
    },

    handleSubmit: function(e){
        console.log("handleSubmit");
        // Why? prevent the default event from occuring
        e.preventDefault(); 
        var form = document.forms.bugAdd;
        this.props.addBug({owner:form.owner.value, title: form.title.value, status: 'New', priority: 'P1'});
        // Clear the form for the next input
        form.owner.value = ""; 
        form.title.value = "";
    }

});

var BugRow = React.createClass({
    
  render: function() {
    console.log("Rendering BugRow:", this.props.bug);
    return (
      <tr>
        <td>{this.props.bug._id}</td>
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
        console.log("Rendering bug table, num items:", this.props.bugs.length);
        var bugRows = this.props.bugs.map(function(bug){
            return <BugRow key={bug._id} bug={bug} />
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

var BugList = React.createClass({
    getInitialState: function(){
        return {bugs:[]};
    },
    render: function(){
        console.log("Rendering bug list, num items: ", this.state.bugs.length);
        return(
            <div>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs}/>
                <BugAdd addBug={this.addBug}/>
            </div>
        )
    },

    componentDidMount: function() {
        $.ajax('/api/bugs').done(function(data){
            this.setState({bugs:data});
        }.bind(this));
    },

    addBug: function(bug) {
        console.log("Adding bug:", bug);
        $.ajax({
            type: 'POST', url: '/api/bugs', contentType: 'application/json',
            data: JSON.stringify(bug),
            success: function(data){
                var bug = data;
                // We're advised not to modify the state, it's immutable. So, make a copy.
                var bugsModified = this.state.bugs.concat(bug);
                this.setState({bugs: bugsModified});
            }.bind(this),
            error: function(xhr, status, err){
                // Show error to user
                console.log('Erring adding Bug: ', err);
            }
        })
    }

});

ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);