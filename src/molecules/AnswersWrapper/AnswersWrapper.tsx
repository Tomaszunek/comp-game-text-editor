import React from 'react'

import { AnswerText } from '../../atoms'

export type AnswersWrapperProps = {
  answers: string[]
}

export const AnswersWrapper = ({ answers }: AnswersWrapperProps) => {
  return (
    <>
      {answers.map((answer) => (
        <AnswerText key={answer} answer={answer} />
      ))}
    </>
  )
}
