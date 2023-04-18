import React, { FC } from 'react'

interface Props{
  children: JSX.Element | JSX.Element[];
}

export const Main:FC<Props> = ({ children }) => {
  return (
    <>
      <main
      style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: ' 0px 30px ',
        
      }}
      >
         { children }
      </main>
    </>
  )
}
