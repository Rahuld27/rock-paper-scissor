import GameUiPage from "./game-ui"

function GameUi(userPreference, score, setScore) {
    try {
        if (true) {
            return (
                <GameUiPage userPreference={userPreference} score={score} setScore={setScore}/>
            )
        }
    } catch (error) {
        console.log('Something went wrong - ', error);
    }
}

export default GameUi;