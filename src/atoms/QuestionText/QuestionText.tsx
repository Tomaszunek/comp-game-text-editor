import React from 'react'

export type QuestionTextProps = { questionText: string }

export const QuestionText = ({ questionText }: QuestionTextProps) => {
  return <div>{questionText}</div>
}
