export default function Person({name='Guest', ageInMonths=0}) {
  const ageInYears = Math.floor(ageInMonths / 12);
  return (
    <>
      <p>Hi! My name is {name}</p>
      <p>I am {ageInYears} years old</p>
    </>
  )
}
