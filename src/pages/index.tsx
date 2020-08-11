import React from "react"

interface HomeProps {
  text: string; 
}

const Home = ({text}: HomeProps) => {
  return <div>{text}</div>
}

export default Home; 
