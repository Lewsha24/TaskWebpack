import background from './bg.'
import './index.scss';
const root = document.querySelector('#app')

interface Item {
    id: number
    title: string
    name: string
    icon: string
}


function renderItem(item : Item, index : number) {
    // Создаем блоки
    const block = document.createElement('div')
    block.className = 'block'
    //Создаем картинки
    const icon = document.createElement('img');
    icon.className = 'icon-' + index
    icon.src = item.title
    icon.style.backgroundImage = item.title
    icon.style.border = 'solid' + '2px' + '#000000'
    // Текст под картинки
    const nameSound = document.createElement('div')
    nameSound.className = 'Name_sound'
    nameSound.textContent = item.name

    block.appendChild(icon)
    block.appendChild(nameSound)
    root.append(block)
    }

background.forEach(renderItem)

