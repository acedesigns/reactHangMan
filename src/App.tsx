import './App.css';
import React, { useState, useEffect } from 'react';
import { Header, Figure, WrongLetters, Word, Notification, PopUp } from './components/';
import {showNotification as show} from './helpers/helpers';

const words = ['application', 'angular', 'react', 'if'];
let selectedWord = words[ Math.floor(Math.random() * words.length) ];

function App() {
	const [playable, setPlayable ] = useState(true);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [showNotification, setShowNotification] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const { key, keyCode } = event;
			
			if (playable && keyCode >= 65 && keyCode <= 90) {
				let foundLetter = key.toLowerCase();
				
				if(selectedWord.includes(foundLetter)) {
					if(!correctLetters.includes( foundLetter )) {
						//setCorrectLetters(correctLetters => [...correctLetters, foundLetter]);
					} else {
						show(setShowNotification);
					}
				} else {
					if(!wrongLetters.includes(foundLetter)) {
						//setWrongLetters(wrongLetters => [...wrongLetters, foundLetter])
					} else {
						show(setShowNotification);
					}
				}
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [ correctLetters, wrongLetters, playable])

	function playAgain() {
		setPlayable(true);

		// Empty Arrays
		setCorrectLetters([]);
		setWrongLetters([]);

		const random = Math.floor(Math.random() * words.length);
		selectedWord = words[random];
	}

	return (
	<div>
      <Header />
	  <div className='game-container'>
		  <Figure wrongLetters={wrongLetters} />
		  <WrongLetters wrongLetters={wrongLetters} />
		  <Word selectedWord={selectedWord} correctLetters={correctLetters} />
		  
	  </div>
	  <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
		<Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
