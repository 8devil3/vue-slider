const app = new Vue({
    el: '#container',
    data: {
        activeIndex: 0,
        arrSlides: [],
        clock: '',
    },
    methods: {
        prevImg() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        nextImg() {
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        autoSlides() {
            this.clock = setInterval(this.nextImg, 3000)
        },
        stopSlides() {
            clearInterval(this.clock);
        },
        getData() {
            for (let i = 0; i < items.length; i++) {
                this.arrSlides.push({img:items[i], title:title[i], text:text[i]});
            }
        }
    },
    created(){
        this.getData();
        this.autoSlides();
    }
});