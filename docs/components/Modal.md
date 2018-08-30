# Modal

```.jsx
<div>
  {false && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>

```



Extends: [Absolute](/components/Absolute) > [Position](/components/Position) > [Box](/components/Box) > [Box](/components/Box)

prop | default | theme key
---|---|---
top | 50% | N/A
left | 50% | N/A
m |  | space
mt |  | space
mr |  | space
mb |  | space
ml |  | space
mx |  | space
my |  | space
p | 3 | space
pt |  | space
pr |  | space
pb |  | space
pl |  | space
px |  | space
py |  | space
color |  | colors
bg | white | colors
borderRadius | 2 | radii
width |  | N/A
maxWidth |  | maxWidths
maxHeight |  | maxHeights