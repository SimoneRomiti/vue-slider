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
       active: true,
    },

    created: function(){
      auto = setInterval(
        () => {
          this.nextImage();
        }, 3000
      );
    },

    methods: {
      clickNextImage : function(){
        clearInterval(auto);
        this.nextImage();
      },

      clickPrevImage: function(){
        clearInterval(auto);
        this.prevImage();
      },

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
      },

      selectedImage: function(i){
        clearInterval(auto);
        this.imageIndex = i;
      }
    }
  }
);
