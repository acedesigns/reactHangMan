import React from 'react'

export interface WrongWordProps {
    wrongLetters: string[],
}
const WrongLetters = ({wrongLetters} : WrongWordProps) => {
	return (
		<div className="wrong-letters-container">
        <div>
			{wrongLetters.length > 0 &&  <p>Wrong</p>}
    		{wrongLetters.map((letter: any, i: number) => <span  key={i}>{letter}</span>)
			.reduce((prev: any, curr: any) => prev === null ? [curr] : [prev, ', ', curr], null )}
		</div>
      </div>
	)
}

export default WrongLetters;
