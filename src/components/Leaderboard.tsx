
function Leaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '{}');
    return (
        <div className="bg-white p-4 rounded-md shadow-lg">
            <h3 className="text-[1.15rem] font-semibold">🏆 Highest Scores</h3>
            {["easy", "medium", "hard"].map(level => (
                <div key={level} className="mt-3 flex items-center justify-between bg-gray-100 px-2 py-2 w-[100%] rounded-md">
                    <div className="font-semibold capitalize">{level}:</div>
                    <div className="text-gray-600 text-[0.75rem]">
                        {leaderboard[level] ? <div className="flex gap-2">
                            <span>🎯 {leaderboard[level].moves}</span>
                            <span>🕛 {leaderboard[level].time}</span>
                        </div>
                            : "No record"}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;