import data from './data'
// import "./index.scss"
import "./index.scss";

const root = document.querySelector('#app')

function renderItem(item, index) {
  const li = document.createElement('li')
  if (index % 2 === 0) {
    li.style.color = 'red'
  }
  li.textContent = item.title
  root.append(li)
}

data.forEach(renderItem)
