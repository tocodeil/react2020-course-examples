# Eliminating renders with useCallback

1. Let's try to Memoize ColorBox

2. Explain: Why didn't it work?
    removeBox -> removeBox -> removeBox

3. Fixing removeBox by removing dependencies
    deletedBoxes -> Ref

4. Memoizing removeBox with useCallback
    useCallback(removeBox)
s
5. Adding keys
    key => [...] => [...]


