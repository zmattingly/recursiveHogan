class hogan {
  constructor(chinCount) {
    this.chinCount = chinCount;
    this.face = '🧔';
    this.chin = [];
  }

  recurse() {
    if (this.chin.length <= this.chinCount) {
      this.chin.push(this.face);
      this.recurse();
    }
    return;
  } 

  init() {
    recurse();
    console.debug("Initialized Hogan, BROTHER!");
  }
}

export default Hogan;
