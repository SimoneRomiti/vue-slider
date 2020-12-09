var app = new Vue(
  {
    el: "#slider",
    data: {
      imageIndex: 0,
      imageUrl: [
        "img/redbull.jpg",
        "img/mercedes2.jpg",
        "img/ferrari2.jpg",
        "img/racingpoint.jpg",
        "img/mclaren.jpg",
       ],
    },
    methods: {
      nextImage: function(){
        if(this.imageIndex + 1 == this.imageUrl.length){
          this.imageIndex = 0;
        } else {
          this.imageIndex++;
        }

      },
      prevImage: function(){
        if(this.imageIndex - 1 == -1){
          this.imageIndex = this.imageUrl.length - 1;
        } else {
          this.imageIndex--;
        }
      }
    }
  }
);
