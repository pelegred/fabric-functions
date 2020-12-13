
# todos

- caption background
- animate
- send github

# notes

- can only use fit() on event "after:render" (text need to be rendered)
- understand render event

# outline

- create canvas
- create new textbox object
- adding text to canvas
    - http://fabricjs.com/docs/fabric.Canvas.html#add
    - adds text and requestRenderAll()
- ...

# issues

- getting width is not precise - need to explore more about charbounds. mutliplying by 1.1 for now as a workaround
- consider always making full width, and draw rect based on lines