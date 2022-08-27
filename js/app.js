const branchesBtn_1 = document.querySelector('.branches__content--wrapper--action--item--1')
const branchesBtn_2 = document.querySelector('.branches__content--wrapper--action--item--2')
const branchesBtn_3 = document.querySelector('.branches__content--wrapper--action--item--3')
const branchesBtn_4 = document.querySelector('.branches__content--wrapper--action--item--4')
const branchesBtn_5 = document.querySelector('.branches__content--wrapper--action--item--5')

const branchesMap_1 = document.querySelector('.branches__content--wrapper--map--1')
const branchesMap_2 = document.querySelector('.branches__content--wrapper--map--2')
const branchesMap_3 = document.querySelector('.branches__content--wrapper--map--3')
const branchesMap_4 = document.querySelector('.branches__content--wrapper--map--4')
const branchesMap_5 = document.querySelector('.branches__content--wrapper--map--5')

branchesBtn_1.addEventListener('click', () => {
    branchesBtn_1.classList.add('active')
    branchesMap_1.classList.add('active')

    branchesBtn_2.classList.remove('active')
    branchesMap_2.classList.remove('active')

    branchesBtn_3.classList.remove('active')
    branchesMap_3.classList.remove('active')

    branchesBtn_4.classList.remove('active')
    branchesMap_4.classList.remove('active')

    branchesBtn_5.classList.remove('active')
    branchesMap_5.classList.remove('active')
})

branchesBtn_2.addEventListener('click', () => {
    branchesBtn_1.classList.remove('active')
    branchesMap_1.classList.remove('active')

    branchesBtn_2.classList.add('active')
    branchesMap_2.classList.add('active')

    branchesBtn_3.classList.remove('active')
    branchesMap_3.classList.remove('active')

    branchesBtn_4.classList.remove('active')
    branchesMap_4.classList.remove('active')

    branchesBtn_5.classList.remove('active')
    branchesMap_5.classList.remove('active')
})

branchesBtn_3.addEventListener('click', () => {
    branchesBtn_1.classList.remove('active')
    branchesMap_1.classList.remove('active')

    branchesBtn_2.classList.remove('active')
    branchesMap_2.classList.remove('active')

    branchesBtn_3.classList.add('active')
    branchesMap_3.classList.add('active')

    branchesBtn_4.classList.remove('active')
    branchesMap_4.classList.remove('active')

    branchesBtn_5.classList.remove('active')
    branchesMap_5.classList.remove('active')
})

branchesBtn_4.addEventListener('click', () => {
    branchesBtn_1.classList.remove('active')
    branchesMap_1.classList.remove('active')

    branchesBtn_2.classList.remove('active')
    branchesMap_2.classList.remove('active')

    branchesBtn_3.classList.remove('active')
    branchesMap_3.classList.remove('active')

    branchesBtn_4.classList.add('active')
    branchesMap_4.classList.add('active')

    branchesBtn_5.classList.remove('active')
    branchesMap_5.classList.remove('active')
})

branchesBtn_5.addEventListener('click', () => {
    branchesBtn_1.classList.remove('active')
    branchesMap_1.classList.remove('active')

    branchesBtn_2.classList.remove('active')
    branchesMap_2.classList.remove('active')

    branchesBtn_3.classList.remove('active')
    branchesMap_3.classList.remove('active')

    branchesBtn_4.classList.remove('active')
    branchesMap_4.classList.remove('active')

    branchesBtn_5.classList.add('active')
    branchesMap_5.classList.add('active')
})