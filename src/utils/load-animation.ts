import lottie from 'lottie-web';

export function animationLoad(animObject) {
    lottie.loadAnimation({
        container:document.getElementById("purchase"),
        animationData: animObject,
        renderer: 'svg',
        loop: true,
    });
}
