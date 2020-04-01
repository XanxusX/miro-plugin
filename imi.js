const colors = [
  '#B2EEE4', '#B2DAEE', '#B2BCEE', '#C6B2EE',
  '#E4B2EE', '#EEB2DA', '#25CED1', '#FFFFFF',
  '#FCDCC7', '#FF8A5B', '#EA526F'
]
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const columnWidth = 150
const rowHeight = 100
const fontSize = 36

function drawTemplate(labels) {
  fetch(labels).then(function (res) {
  if (!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
  }).then(function (data) {
    console.log(data)
  })
  miro.board.widgets.create({type:'sticker', text: 'Hello', metadata: { "3074457347465593870": {"position":"123"}}})
}

function getShape(x, y, color) {
  return {
    type: 'shape',
    x: x,
    y: y,
    width: columnWidth,
    height: rowHeight,
    style: {
      borderWidth: 0,
      backgroundColor: color
    }
  }
}

function getRowLabel(text, y, color) {
  return {
    type: 'text',
    x: -(columnWidth / 2 + fontSize),
    y: y,
    text: text,
    width: columnWidth,
    height: fontSize,
    rotation: 270,
    style: {
      fontSize: fontSize,
      textColor: color,
      textAlign: 'c'
    }
  }
}

function getColumnLabel(colIdx, x) {
  return {
    type: 'text',
    x: x,
    y: -(rowHeight / 2 + fontSize),
    text: workDays[colIdx],
    width: columnWidth,
    height: fontSize,
    style: {
      fontSize: fontSize,
      textColor: '#555',
      textAlign: 'c'
    }
  }
}

function getRowColor(index) {
  return colors[index % colors.length]
}
