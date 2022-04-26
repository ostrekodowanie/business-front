export default function landingHeight() {
    const landingPage = document.querySelector('.s1');
    let screenHeight = window.innerHeight;
    landingPage.style.minHeight = `calc(${screenHeight}px - 5rem)`
}