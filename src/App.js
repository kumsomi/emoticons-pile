import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "😎": "cool",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "🦶": "Foot",
  "👂": "Ear",
  "🤏": "Pinching hand",
  "👈": "Backhand index pointing left",
  "👉": "Backhand index pointing right",
  "☝": "Index pointing up",
  "✌": "Victory hand",
  "👌": "OK hand",
  "👍": "Thumbs up",
  "👎": "Thumbs down",
  "👋": "Waving hand",
  "✍": "Writing hand",
  "🔥": "lit",
  "💯": "awesome",
  "🍕": "pizza",
  "🍔": "burger",
  "🍜": "noodles",
  "🍚": "rice",
  "🥗": "vegetable bowl",
  "🍿": "popcorn",
  "🎂": "cake"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiWeHave = Object.keys(emojiObject);
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiObject[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this in our database.";
    }
    setMeaning(emojiMeaning);
  }

  function onEmojiClickHandler(emoji) {
    setMeaning(emojiObject[emoji]);
  }
  return (
    <div className="App">
      <h1>Emoticons pile</h1>
      <input
        placeholder="enter your favourite emojis to know their meaning"
        onChange={inputChangeHandler}
      ></input>
      <h2>{meaning}</h2>
      <div className="container">
        <h3>Emojis we know</h3>
        {emojiWeHave.map((emoji, index) => {
          return (
            <span onClick={() => onEmojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
