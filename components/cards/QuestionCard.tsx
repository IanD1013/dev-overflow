import React from "react";

interface Props {
  question: Question;
}

const QuestionCard = ({ question: { _id, title, tags, author, createdAt, upvotes, answers, views } }: Props) => {
  return <div className="">QuestionCard</div>;
};

export default QuestionCard;
