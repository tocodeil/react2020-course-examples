# Custom React Hook

1. Sharing JSX Code is Easy

function Header(props) {
    return (
            <div>
                <h1>My Cool App</h1>
                <h2>Signup Below</h2>
            </div>   
    )
}

function Page1(props) {
    return (
        <>
            <Header />
            <p>Page 1</p>
        </>
    )
}

function Page2(props) {
    return (
        <>
            <Header /> 
            <p>Page 2</p>
        </>
    )
}




2. BUT: How do you share a Stateful Logic?

3. Solution: Write a custom hook
    - Identify duplicate stateful logic
    - Reuse using custom hook
