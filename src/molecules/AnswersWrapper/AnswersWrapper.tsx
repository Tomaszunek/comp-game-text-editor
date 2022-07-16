import React from 'react'

import { AnswerText } from '../../atoms'

type AnswersWrapperProps = {
  answers: string[]
}

export const AnswersWrapper = ({ answers }: AnswersWrapperProps) => {
  return (
    <>
      {answers.map((answer) => (
        <AnswerText answer={answer} key={answer} />
      ))}
    </>
  )
}
