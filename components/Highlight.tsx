import React, { useState } from 'react';

const Journal = () => {
  const [highlightedWords, setHighlightedWords] = useState<string[]>([]);
  const [selectedText, setSelectedText] = useState('');

  const text = "This is a simple journal entry. Users should be able to select any word and highlight it.";

  const handleHighlightToggle = () => {
    const words = selectedText.trim().split(' ').filter(word => word);
    setHighlightedWords(prevWords => {
      const newWords = [...prevWords];
      words.forEach(word => {
        const index = newWords.indexOf(word);
        if (index !== -1) {
          newWords.splice(index, 1);
        } else {
          newWords.push(word);
        }
      });
      return newWords;
    });
    setSelectedText('');
  };

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection) {
      setSelectedText(selection.toString());
    }
  };

  return (
    <div>
      <p>Select any text and press the button to highlight or remove highlight:</p>
      <p onMouseUp={handleMouseUp}>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            style={{ backgroundColor: highlightedWords.includes(word) ? 'red' : 'transparent' }}
          >
            {word}{' '}
          </span>
        ))}
      </p>
      <button onClick={handleHighlightToggle} className='bg-blue-500 px-4 py-3'>
        Toggle Highlight
      </button>
    </div>
  );
};

export default Journal;