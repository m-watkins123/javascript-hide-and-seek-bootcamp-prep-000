
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {

  var current = [document.querySelector('div#grand-node'), 0]
  var deepest = current
  var next = []

  while (current) {
    var [node, level] = current
    if (level > deepest[1]) {
      deepest = current
    }
    for (var i = 0; i < node.children.length; i++) {
      next.push([node.children[i], level + 1])
    }

    current = next.pop()
  }

  return deepest[0]
}

function increaseRankBy(n) {
  var items = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML) + n
  }
}
