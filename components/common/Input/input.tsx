import { FC } from 'react'


interface PropsInput {

}

export const Input:FC <PropsInput> = () => {
  return (
    <div className="clss-input">
      <input
        type="text"
      />
      <span>Email</span>
    </div>
  )
}



