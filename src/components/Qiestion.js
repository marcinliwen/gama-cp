import * as React from "react";

const Question = ({ questionId, name, questions }) => {
  console.log("questionId: ", questionId);
  const [displayQuestions, setDisplayQuestions] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const [usedQuestions, setUsedQuestions] = React.useState(questions);

  React.useEffect(() => {
    console.log("useEffect questions: ", questions);
    setDisplayQuestions(false) //ukryj losowanie pytań
    setUsedQuestions(questions); //zmień listę pytań
  }, [questionId]); //jezeli nowa kategoria pytań

  const getQuestions = () => {
    if (usedQuestions.length > 0) {
      var newQuestion = getRandomItem(usedQuestions);
      let questionId = newQuestion.pytanie.id;
      console.log(questionId);
      setUsedQuestions(
        usedQuestions.filter((item) => item.pytanie.id !== questionId)
      );
      setQuestion(newQuestion);
      setDisplayQuestions(true);
    }
  };

  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  return (
    <div className="box">
      <h2>Pytania z kategorii: <strong>{name ? name : "brak kategorii"}</strong> </h2>
      <button className="button is-small" onClick={() => getQuestions()}>Losuj pytanie</button>
      {displayQuestions ? <div className="card my-2"><div className="card-content"><div className="content">{question.pytanie.text}</div></div></div> : ""}
    </div>
  );
};

export default Question;
