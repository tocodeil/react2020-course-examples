# React Router Intro

- [x] What Is React Router

- [x] A First Routing Table

- [x] Navigation with <Link /> vs. <a />








## Useful Snippets

Install react router

```
npm install --save react-router-dom
```

A Simple Routing Table

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```
