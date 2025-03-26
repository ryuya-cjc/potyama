import React from 'react';
import './App.css'; // CSSが必要な場合

// 画像をインポート
import myImage from './potyma1.png';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App!</h1>
      {/* インポートした画像を表示 */}
      <img src={myImage} alt="My Image" />
    </div>
  );
}

export default App;
