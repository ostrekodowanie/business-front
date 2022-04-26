export function pseudoElemAnim() {
    var leftLineText = gsap.utils.toArray('.line-text.left')
    var rightLineText = gsap.utils.toArray('.line-text.right')
    leftLineText.forEach((item) => {
        gsap.from(item, {
            duration: 0.5,
            x: '-20%',
            opacity: 0,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: item,
                start: "top 70%"
            }
        })
    })
    rightLineText.forEach((item) => {
        gsap.from(item, {
            duration: 0.5,
            x: '20%',
            opacity: 0,
            ease: Power1.easeInOut,
            scrollTrigger: {
                trigger: item,
                start: "top 70%"
            }
        })
    })
}   

export function animations() {
    gsap.from('.problem-div', {
        scrollTrigger: {
            trigger: '.problem-div',
            start: 'top 80%'
        },
        duration: 0.5,
        stagger: 0.1,
        y: 80,
        opacity: 0,
        ease: Power1.easeInOut
    })
}