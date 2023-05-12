// 方法重写
class Father {
    study() {
        console.log(`father study`);
    }
}
class Son extends Father {
    study() {
        super.study();
        console.log(`son study`);
    }
}
const s = new Son();
s.study();
