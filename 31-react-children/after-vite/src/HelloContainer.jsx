function Layout(props) {
  return (
    <div>
      <h1>Hello World</h1>
      {props.children}
      <h1>Footer</h1>
    </div>
  );
}

export function Page1() {
  return (
    <Layout>
      <p>Page 1</p>
    </Layout>
  );
}

export function Page2() {
  return (
    <Layout>
      <p>Page 2</p>
    </Layout>
  );
}



