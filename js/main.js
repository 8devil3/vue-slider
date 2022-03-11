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
            items.forEach((itm, indx) => {
                this.arrSlides.push({img:items[indx], title:title[indx], text:text[indx]});
            });
        }
    },
    created(){
        this.getData();
        this.autoSlides();
    }
});