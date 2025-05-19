const mainDiv = document.querySelector('.main');
const overlay = document.querySelector('.overlay');
const submitBtn = document.querySelector('.submit-btn');
const allRatings = document.querySelectorAll('.ratings');
const ratingDiv = document.querySelector('.rating-rates');
const rate = document.querySelector('.rate')

let chosenRating;

ratingDiv.addEventListener('click', (e) => {
    const target = e.target;
    chosenRating = target.innerText;
    rate.innerText = chosenRating
    allRatings.forEach((e) => {
        clearRating(e)
    })
    target.classList.add('selected');
})

function clearRating(num){
    num.classList.remove('selected')
}
submitBtn.addEventListener('click', () => {
    if(chosenRating){
        mainDiv.classList.add('success');
    }
})
overlay.addEventListener('click', () => {
    mainDiv.classList.remove('success');
    allRatings.forEach((e) => {
        clearRating(e)
    })
    chosenRating = ''
})