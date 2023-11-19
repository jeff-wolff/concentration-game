import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
    useEffect(() => {
        document.title = `Memory Game | Wins: ${wins}`;
    }, [wins]);

    return (
        <header className="header">
            <h1>Memory Game</h1>
            <strong>{ wins } wins</strong>
            <button onClick={handleNewGame}>New Game</button>
        </header>
    );
}
export default Header;