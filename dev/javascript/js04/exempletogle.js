div.addEventListener('click', function() {
    // if (this.classList.contains('test')) {
    //     this.classList.remove('test');
    //     this.classList.add('anotherClass');
    // } else {
    //     this.classList.remove('anotherClass');
    //     this.classList.add('test');
    // }
    //
        this.classList.toggle('test');
        this.classList.toggle('anotherClass');
});

document.addEventListener('DOMContentLoaded', function()){
  console.log('loaded');
}
