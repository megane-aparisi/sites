class RandomNumber {

  constructor(max, min) {
    this.number = Math.floor(Math.random() * (max- min +1) + min);
    return this.number;
 }


}
