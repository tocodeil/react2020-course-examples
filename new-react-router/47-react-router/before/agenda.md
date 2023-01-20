# React Router Intro

- [ ] What Is React Router

- [ ] A First Routing Table

- [ ] Navigation with <Link /> vs. <a />











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
