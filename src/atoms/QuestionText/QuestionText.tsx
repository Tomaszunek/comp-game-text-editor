import React from 'react'

type QuestionTextProps = { questionText: string }

export const QuestionText = ({ questionText }: QuestionTextProps) => {
  return <div>{questionText}</div>
}
