import uuid from "node-uuid";
import React from "react";

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			notes:[
				{
					id:uuid.v4(), task:"Learn webpack"
				},
				{
					id:uuid.v4(), task:"Learn React"
				}
			]
		}
		this.addNote = this.addNote.bind(this)
	}
	render(){
		const notes = this.state.notes;
		return (
			  <div>
			    <button onClick={this.addNote}> + </button>
			  	<ul>
			  		{ notes.map(note =>
			  			<li key={note.id}>{note.task}</li>
			  		)}
			  	</ul>
			  </div>
			)

	}
	addNote(){
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),task:"new task"
			}])
		})
	}
}