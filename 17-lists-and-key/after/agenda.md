# Lists and Key

1. Activate shuffle

items.map((item, index) => {
    <li>{item}</li>
});

==========================================================
[
    <li>Sunday</li>
    <li>Monday</li>
    <li>Tuesday</li>
]


items.map((item, index) => (
    <li>{item}</li>
))


2. Explain: What happened? Why?

render()                 render()
V one                    two
  two                    one  <----
  three                  three
  four                   four




3. Bufix: use unique key

4. Extra: implement a "Reset" button with key

