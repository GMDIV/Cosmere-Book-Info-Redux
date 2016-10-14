import React, { Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render () {

		if (!this.props.book){ //because state will be null by default, and a null title will cause errors
			return <div className='details'><h1>Select Cosmere book for information!</h1> </div>;
		}

		return (
			<div className='details'>
				<h3>Details for: </h3>
				<div><h2>{this.props.book.title}</h2></div>
				<div>{this.props.book.world}</div>
				<div>{this.props.book.shards}</div>
				<div>{this.props.book.series}</div>
				<div>{this.props.book.pages}</div>
				<div>{this.props.book.year}</div>
				<div>{this.props.book.description}</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);