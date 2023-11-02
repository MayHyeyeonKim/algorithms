// PyPy와 CPython (기본 Python 구현)은 Python 인터프리터의 두 가지 주요 구현체 중의 하나입니다. 이 두 구현체는 몇 가지 중요한 차이점을 가지고 있습니다:

// 실행 속도:

// PyPy는 Just-In-Time (JIT) 컴파일러를 사용하여 Python 코드를 더 빠르게 실행합니다. 일반적으로 CPython에 비해 더 빠릅니다.
// CPython은 Python 코드를 바이트코드로 컴파일하고, 이를 Python 가상 머신 (Python Virtual Machine, CPython)에서 실행합니다. PyPy는 JIT 컴파일로 인해 빠르게 동작합니다.
// 메모리 사용량:

// PyPy는 일반적으로 메모리 사용량이 더 적습니다. 이는 Python 코드를 최적화하고 메모리를 효율적으로 관리하기 때문입니다.
// CPython은 메모리 사용량이 더 많을 수 있으며, 특히 긴 실행 시간 동안 메모리 누수의 위험이 있습니다.
// 호환성:

// 대부분의 Python 코드는 CPython과 PyPy에서 잘 동작하지만, 일부 CPython 확장 모듈은 PyPy와 호환되지 않을 수 있습니다.
// PyPy는 CPython 2.x 및 3.x와 호환되도록 개선되어 왔지만, 일부 특정한 경우에는 차이가 있을 수 있습니다.
// 지원되는 버전:

// CPython은 공식 Python 구현체이며, Python의 모든 버전을 지원합니다.
// PyPy는 CPython의 특정 버전과 호환되며, 일부 Python 버전의 지원이 제한적일 수 있습니다.
// 특정 작업:

// PyPy는 일반적인 Python 작업에 대해 일반적으로 더 빠르지만, 특정 작업에 대해서는 CPython이 더 효율적일 수 있습니다. 따라서 성능이 중요한 작업에 대한 벤치마킹이 필요할 수 있습니다.
// 일반적으로 대부분의 Python 프로그램은 어느 구현체를 선택하더라도 잘 작동합니다. PyPy는 속도와 메모리 사용량의 향상을 가져올 수 있지만, 특정 환경이나 라이브러리 호환성 문제로 인해 CPython을 사용해야 할 수도 있습니다. 선택은 프로젝트의 요구 사항과 성능 특성에 따라 다를 수 있습니다.

//소수점 아래 특정 자리에서 반올림
// let x = 123.456;
// console.log(x.toFixed(2));

// //집합 자료형

// let mySet = new Set();
// mySet.add(3);
// mySet.add(5);

// console.log(`원소의 개수: ${mySet.size}`);
// console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);
// for (let item of mySet)
//   console.log(item);

// let arr = [8,1,4,5,7];
// arr = new Array(5).fill(0);
// console.log(arr)

// // Array.prototype.reduce()
// // reduce()메서드는 배열의 각 요소에 대해 reducer함수를 실행한 뒤에 하나의 결과를 반환합니다.
// // reducer의 형태: (accumulator, currentValue) => (반환값)
// // - 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
// // - 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.

// let data = [5,2,9,8,4];
// // //minValue 구하기 예제
// // let minValue = data.reduce((a,b)=>Math.min(a,b));
// // console.log(minValue)

// //원소의 합계 구하기 예제
// let summary = data.reduce((a,b)=>a+b);
// console.log(summary);

// while(조건문){
//   //실행되는 코드 부분
// }
//  int -> string
// let a = "777";
// let b = Number(a);
// console.log(b);

//string -> int
// let a = 777;
// let b = String(a);
// console.log(b);

// // for (초기문; 조건문; 증감문){
// //     //statements
// //   }

// let summary = 0;
// for (let i = 1; i <= 10; i++) {
//     summary += i;
// }
// console.log(summary);

// //한 줄씩 입력을 받아서, 처리하여 정답을 출력할 때는 readline모듈을 사용할 수 있다.
// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// rl.on('line', function(line){
//   input.push(line);
// }).on('close',function(){
//   console.log(input);
//   process.exit();
// });

// //readline모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기

// let fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// console.log(input)

// answer = '';

// for (let i = 1; i <= 100; i++) {
//   answer += i +'\n';
// }

// console.log(answer)
