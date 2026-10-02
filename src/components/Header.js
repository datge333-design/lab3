import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h1 style={{ fontSize: "22px", margin: 0 }}>Mini Movies Manager</h1>

      <button onClick={toggleTheme}>{darkMode ? "☀️ Light" : "🌙 Dark"}</button>
    </header>
  );
}

export default Header;
