import React from 'react';
import './App.css';

function App() {
  return React.createElement('blockquote', null,
    React.createElement('h3', null, '"Настоящая любовь начинается там, где ничего не ждут взамен."'),
    React.createElement('footer', null, '— Антуан де Сент-Экзюпери ©')
  );
}

export default App;