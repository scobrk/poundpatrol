
window.onscroll = () => {
    const nav = document.querySelector('#menu');
        if(this.scrollY <= 25) nav.className = 'light'; else nav.className = 'scroll';
    };

