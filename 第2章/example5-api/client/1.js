// 单个导出
// export const a = 10;
// export let b = 20;
// export function c() {
//     console.log('c');
// }

// 一齐导出
const a = 10;
let b = 20;
function c() {
    console.log('c');
}
export {a, b, c}

// 导出默认
export default b;