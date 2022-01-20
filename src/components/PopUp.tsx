/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers'

export interface PopUpProps {
    wrongLetters: string[],
	correctLetters: string[],
	selectedWord: string,
	setPlayable: Function,
	playAgain: any
}

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}: PopUpProps) => {
	let finalMessage = '';
	let finalMessageRealWord = '';
	let playable = true;

	if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
		finalMessage = 'Congratulations You won';
		playable = false;
	} else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
		finalMessage = 'You lost';
		finalMessageRealWord = ` ... the word was ${selectedWord}`;
		playable = false;
	}

	useEffect(() => setPlayable(playable) )

	return (
		<div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2 id="final-message">{finalMessage}</h2>
        <h3 id="final-message-reveal-word">{finalMessageRealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
	)
}

export default PopUp;
