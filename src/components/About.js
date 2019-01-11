import React from "react";

export default function About() {
  return (
    <div>
      <h1>About this project...</h1>
      <p>
        This project is a flashcard web application. It is built with React,
        React-Router and Google's Firebase real-time database, Firestore. For
        styling I've chosen to use SASS, a CSS preprocessor.
      </p>
      <p>
        {" "}
        In this web app you can choose from a selection of topics to add, delete
        and practice flashcards. When you add or delete a card, this is synced
        with Google's real-time Firestore database. When you choose a deck of
        cards, those cards are loaded from the database. If you successfully
        remembered all the flashcards in a deck, you are given the option to
        practice again. Some advanced react techniques such as render props,
        refs and lazy-loading/suspense are used in this app. I hope you enjoy!
      </p>
    </div>
  );
}
