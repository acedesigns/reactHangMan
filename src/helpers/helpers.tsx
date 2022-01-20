
export function showNotification(setter: any) {
	setter(true);

	setTimeout(() => {
		setter(false);
	}, 2000);
}

export function checkWin(correct: string[], wrong: string[], word: string) {
	let gameStatus: string = 'win';

	// Check for win
	word.split('').forEach(letter => {
		if(!correct.includes(letter)){
			gameStatus = ''
		}
	});

	// Check for loss
	if( wrong.length === 6) gameStatus = 'lose';

	return gameStatus;
}