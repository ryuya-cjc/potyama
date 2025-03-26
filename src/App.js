import React, { useState } from 'react'; // useState をインポート
import './App.css';
import potymaImage from './potyma1.png'; // 画像をインポート

function App() {
  // 入力フォームの値を管理するためのステートを追加
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  // 入力値が変わった時の処理
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // ボタンが押された時の処理
  const handleButtonClick = () => {
    setDisplayText(inputValue); // 入力したテキストを表示
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* 画像を表示 */}
        <img src={potymaImage} className="App-image" alt="Potyma" />

        {/* 入力フォーム */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="入力してください"
          className="App-input"
        />

        {/* ボタン */}
        <button onClick={handleButtonClick} className="App-button">
          表示
        </button>

        {/* 入力された内容を表示 */}
        {displayText && <p className="App-displayText">入力されたテキスト: {displayText}</p>}
      </header>
    </div>
  );
}

export default App;
