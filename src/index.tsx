import background from './bg.'
import './index.scss';
import * as url from "url";
const root = document.querySelector('#app')

interface Item {
    id: number
    title: string
    name: string
    icon: string
    music: string

}

let audio: any

function renderItem(item : Item) {
    // Создаем блоки
    const block = document.createElement('div')
    let idMusic = item.id
    block.className = 'block'
    block.onclick = (event) => {
        // audio
        audio.src = "https://www.kozco.com/tech/organfinale.wav"
       audio.querySelector('audio')
       audio.play()
        audio.stop = function() {
            this.pause();
            this.currentTime = 0.0;
        }
    }
    // Создаем icon
    const icon = document.createElement('svg')
    icon.className = 'icon'
    icon.style.backgroundImage = "url(" + item.icon + ")"
    icon.onclick = () => {
        document.body.style.backgroundImage = "url(" + item.title + ")"
    }

    // блоки с картинками
    const img = document.createElement('img')
    img.src = item.title
    img.style.backgroundImage = item.title
    img.onclick = () => {
        document.body.style.backgroundImage = "url(" + item.title + ")"
    }
    // Текст под картинки
    const nameSound = document.createElement('div')
    nameSound.className = 'name_sound'
    nameSound.textContent = item.name

    block.appendChild(icon)
    block.appendChild(img)
    block.appendChild(nameSound)
    root.append(block)
}

function range() {

    // Ползунок добавления громкости
    const rangeBox = document.createElement('div')
    const range = document.createElement('input')
    const valueRange = document.createElement('span')

    // Создание кнопки паузы
    const pauseSounds = document.createElement('svg')
    const url = '/assets/icons/pause.svg'
    pauseSounds.className = 'pause_sound'
    pauseSounds.style.backgroundImage = "url(" + url + ")"

    rangeBox.className = 'range_box'
    range.className = 'range'
    range.max = '10'
    range.min = '0'
    range.type = 'range'
    range.value = '10'
    valueRange.className = 'range_value'
    valueRange.textContent = '0'

    rangeBox.appendChild(range)
    rangeBox.appendChild(valueRange)
    rangeBox.append(pauseSounds)
    root.append(rangeBox)

    document.querySelectorAll('.range_box input').forEach(item => {

        item.addEventListener('mousemove', function() {

            this.closest('.range_box').querySelector('.range_value').innerHTML = this.value;
        })

    });
    //Готовый скрипт для трека
    // Когда 0 звука нет, а когда 1 звук есть. Но переделать в цикл не получилось....
    range.onchange = function(){
        if (range.value == range.min){
            audio.volume = 0;
        } else if(range.value == range.max){
            audio.volume = 1;
        }
    }
}

function music () {
    audio = document.createElement('audio')
    audio.setAttribute("autoplay","true")
    document.body.appendChild(audio)
}
music()
background.forEach(renderItem)
range()