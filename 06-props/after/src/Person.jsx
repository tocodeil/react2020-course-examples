// export default function Person() {

// }

export default (props) => {
  // Destructuring
  const { name="Guest", ageInMonths=0 } = props;
  const ageInYears = Math.floor(ageInMonths / 12);
  
  return (
    <>
      <p>Hi! My name is {name} and I am {ageInYears} years old</p>    
    </>
    
  )
}

