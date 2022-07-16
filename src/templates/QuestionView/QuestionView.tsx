import React from 'react'

import { Question } from '../../organisms'

type QuestionViewProps = {
  answers: string[]
  questionText: string
}

export const QuestionView = ({ answers, questionText }: QuestionViewProps) => {
  return <Question answers={answers} questionText={questionText} />
}
