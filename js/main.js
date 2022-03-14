const app = new Vue({
    el: '#container',
    data: {
        activeIndex: 0,
        arrSlides: [],
        clock: null,
        intervalloSlider: 1000,
    },
    methods: {
        prevImg() { // immagine precedente
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        nextImg() { // immagine successiva
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        autoSlides() { // carosello slides ogni 3 sec
            this.clock = setInterval(this.nextImg, this.intervalloSlider)
        },
        stopSlides() { // fermo le slides
            clearInterval(this.clock);
        },
        getData() { // ricavo i dati dagli array di parteza. Prima ho appurato (manualmente) che i tre array di partenza abbiano la stessa length, altrimenti riceverei campi vuoti
            items.forEach((itm, indx) => {
                this.arrSlides.push({img:items[indx], title:title[indx], text:text[indx]});
            });
        }
    },
    created(){ // start dell'acquisizione dei dati
        this.getData();
    },
    mounted() { // partenza del carosello
        this.autoSlides();
    }
});