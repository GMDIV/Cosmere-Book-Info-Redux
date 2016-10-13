

// State argument is not appliction state. Only the state that this 
// reducer is responsible for.

//we can't return state if it is undefined as the reducers won't take it, 
//which is why we need to make it possibily null.
export default function(state = null, action) { //if state is undefined, state is null (ES6 stuff)

	switch(action.type){ 
		case 'BOOK_SELECTED':  //if the action.type is "BOOK_SELECTED"...
			return action.payload;
	}


	return state;
}