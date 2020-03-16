class Edit {
    constructor() {
      this.multiColor = document.getElementById('multi');
    }

    uniqueColor() {
    allColorsBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
          color = this.getAttribute('data-color');
        })
      });
    }

    changeColorByInput() {
      multiColor.addEventListener('change', function() {
        color = this.multiColor.value;
      });
    }

     uniqueWeight() {
      weightBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            weight = this.getAttribute('id');
        })
      });
    }

    deleteWall(){
     deleteBtn.addEventListener('click', function(e) {
       context.clearRect(0, 0, canvas.width, canvas.height);
     });

   }
}
