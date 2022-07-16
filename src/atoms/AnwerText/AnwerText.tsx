import React from "react";

export type AnswerTextProps = {
  answer: string;
};

export const AnswerText = ({ answer }: AnswerTextProps) => {
  return <div>{answer}</div>;
};
