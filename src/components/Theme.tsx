

function Theme({ theme, setTheme, handleNewGame }: { theme: string; setTheme: (theme: string) => void; handleNewGame: () => void; }) {

    const handleThemeChange = (themes: string) => {
        setTheme(themes);
        handleNewGame();
    }

    return (
        <div className="bg-white p-4 rounded-md shadow-lg">
            <h3 className="text-[1.15rem] font-semibold">🎨 Theme</h3>
            <div className="mt-2 flex justify-center gap-2">
                <button className={`flex-1 border p-2 rounded-md ${theme === "animals" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleThemeChange("animals")}>
                    Animals
                </button>
                <button className={`flex-1 border p-2 rounded-md ${theme === "fruits" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleThemeChange("fruits")}>
                    Fruits
                </button>
                <button className={`flex-1 border p-2 rounded-md ${theme === "sports" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleThemeChange("sports")}>
                    Sports
                </button>
                <button className={`flex-1 border p-2 rounded-md ${theme === "faces" ? "bg-blue-500 text-white" : "hover:border-blue-500 hover:bg-gray-100"}`} onClick={() => handleThemeChange("faces")}>
                    Faces
                </button>
            </div>
        </div>
    );
}

export default Theme;