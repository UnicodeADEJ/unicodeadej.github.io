//////////////////////////////////////////////////////////////////////////////////////////////
//Trasições para cima
const elementsup = document.querySelectorAll('.hiddenup');

const myObserverup = new IntersectionObserver((entries) =>
{
 entries.forEach( (entry)  => {
    if(entry.isIntersecting)
    {
        entry.target.classList.add('showup');
    }else
    {
        entry.target.classList.remove('showup');
    }
 })
})
elementsup.forEach( (elementup) => myObserverup.observe(elementup))

//////////////////////////////////////////////////////////////////////////////////////////////////
//Trasições para direita
const elementsri = document.querySelectorAll('.hiddenri');

const myObserverri = new IntersectionObserver((entries) =>
{
 entries.forEach( (entry)  => {
    if(entry.isIntersecting)
    {
        entry.target.classList.add('showri');
    }else
    {
        entry.target.classList.remove('showri');
    }
 })
})
elementsri.forEach( (elementri) => myObserverri.observe(elementri))

//////////////////////////////////////////////////////////////////////////////////////////////////
//Trasições para esquerda
const elementsle = document.querySelectorAll('.hiddenle');

const myObserverle = new IntersectionObserver((entries) =>
{
 entries.forEach( (entry)  => {
    if(entry.isIntersecting)
    {
        entry.target.classList.add('showle');
    }else
    {
        entry.target.classList.remove('showle');
    }
 })
})
elementsle.forEach( (elementle) => myObserverle.observe(elementle))

//////////////////////////////////////////////////////////////////////////////////////////////////