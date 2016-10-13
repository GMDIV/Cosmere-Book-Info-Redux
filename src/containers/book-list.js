import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => { //map through this.props.book to display title name on a list item
			return (
				<li key={book.title} className = "list-group-item">{book.title} </li> //need to add key because it is a list
			)
		})
	}
	render(){
		return (
			<ul className='list-group col-sm-4'>
				{this.renderList()} 
			</ul>

		)
	}
}

function mapStateToProps(state){
	//what is returned will show up as props inside of BookList

	return {
		books: state.books
	}
}

export default connect(mapStateToProps)(BookList);