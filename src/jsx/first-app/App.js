function App() {
  const buttonText = { text: "Kaydet" };
  return (
    <div className="App">
      <div>
        <label htmlFor="name" className="label">
          E-mail:
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: "red", color: "yellow" }}>
          {buttonText.text}
        </button>
      </div>
    </div>
  );
}

export default App;
