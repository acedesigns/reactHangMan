import React from 'react';

export interface WordProps {
    selectedWord: string,
    correctLetters: string[],
}

const Word = ({ selectedWord, correctLetters } : WordProps ) => {
	return (
		<div className="word">
			{selectedWord.split('').map( (letter: any, index: number) => {
				return (
					<span className="letter" key={index}>
            			{correctLetters.includes(letter) ? letter : ''}
          			</span>
				)
			})}
		</div>
	)
}

export default Word
