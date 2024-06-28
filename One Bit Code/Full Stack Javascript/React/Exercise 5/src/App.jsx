import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <>
      <div id="app">
        <h1>Game Library</h1>
        <NewGameForm addGame={addGame} />
          <div className="games">
            {games.length > 0 
            ? 
            games.map((game) => (
              <Game
                id={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={() => removeGame(game.id)}
              />))
              : (
              <h2 style={{ margin: "4rem auto" }}>Try to add new games!</h2>
            )}
          </div>
      </div>
    </>
  )
}

export default App
