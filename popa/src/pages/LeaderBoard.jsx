const LeaderBoard = () => {
    return (
            <div id="leaderboard-screen" className="screen">
        <div className="leaderboard-container">
            <button className="back-btn" onclick="backToGame()">
                ← Назад к игре
            </button>
            <h1>🏆 Рейтинг лучших 🏆</h1>
            <div className="leaderboard-table">
                <div className="leaderboard-header">
                    <span>Место</span>
                    <span>Студент</span>
                    <span>Баллы</span>
                </div>
                <div className="leaderboard-row rank-1">
                    <span className="rank">🥇 1</span>
                    <span className="player">Юзер</span>
                    <span className="score">15 750</span>
                </div>
                <div className="leaderboard-row rank-2">
                    <span className="rank">🥈 2</span>
                    <span className="player">Юзер</span>
                    <span className="score">12 340</span>
                </div>
                <div className="leaderboard-row rank-3">
                    <span className="rank">🥉 3</span>
                    <span className="player">Юзер</span>
                    <span className="score">9 880</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">4</span>
                    <span className="player">Юзер</span>
                    <span className="score">7 230</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">5</span>
                    <span className="player">Юзер</span>
                    <span className="score">6 450</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">6</span>
                    <span className="player">Юзер</span>
                    <span className="score">5 120</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">7</span>
                    <span className="player">Юзер</span>
                    <span className="score">4 890</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">8</span>
                    <span className="player">Юзер</span>
                    <span className="score">3 670</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">9</span>
                    <span className="player">Юзер</span>
                    <span className="score">2 340</span>
                </div>
                <div className="leaderboard-row highlight">
                    <span className="rank">10</span>
                    <span className="player">Студент123 (Вы)</span>
                    <span className="score">1 000</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LeaderBoard