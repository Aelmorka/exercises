import './App.css';
import { useState } from 'react'

import Gallery from './components/Gallery'
import Conversation from './components/Conversation'

function App() {
  	return (
    	<div className="App">
      		<Gallery />
			<Conversation />
    	</div>
  	);
}

export default App;
