// 方法重写
class Father {
  study(): void {
    console.log(`father study`)
  }
}

class Son extends Father {
  study(): void {
    super.study()
    console.log(`son study`)
  }
}

const s: Father = new Son()
s.study()

