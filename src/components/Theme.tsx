

function Theme({ theme, setTheme, handleNewGame }: { theme: string; setTheme: (theme: string) => void; handleNewGame: () => void; }) {

    const handleThemeChange = (themes: string) => {
        setTheme(themes);
        handleNewGame();
    }

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h3>Theme</h3>
            <div className="flex">
                <button className={`border p-2 rounded-md ${theme === "animals" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleThemeChange("animals")}>
                    Animals
                </button>
                <button className={`border p-2 rounded-md ${theme === "fruits" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleThemeChange("fruits")}>
                    Fruits
                </button>
                <button className={`border p-2 rounded-md ${theme === "sports" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleThemeChange("sports")}>
                    Sports
                </button>
                <button className={`border p-2 rounded-md ${theme === "faces" ? "bg-blue-500 text-white" : ""}`} onClick={() => handleThemeChange("faces")}>
                    Faces
                </button>
            </div>
        </div>
    );
}

export default Theme;