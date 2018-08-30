# Panel

```.jsx
<Panel color='blue'>
  <Panel.Header
    textProps={{color: 'white'}}
    bg='blue'>
    Hello
  </Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer
    textProps={{color: 'blue'}}
  >
    Footer
  </Panel.Footer>
</Panel>

```



Extends: [Box](/components/Box) > [Box](/components/Box)

prop | default | theme key
---|---|---
color |  | colors
bg | white | colors
borderRadius | 2 | radii
border | 1 | borders
borderTop |  | borders
borderRight |  | borders
borderBottom |  | borders
borderLeft |  | borders
borderColor | gray | colors
m |  | space
mt |  | space
mr |  | space
mb |  | space
ml |  | space
mx |  | space
my |  | space
p |  | space
pt |  | space
pr |  | space
pb |  | space
pl |  | space
px |  | space
py |  | space