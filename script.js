// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello",i);
// }
// console.log("hello world")

// console.log(process.argv);


// let arg=process.argv;
// for(let i=2;i<arg.length;i++){
//     console.log("Namaste & Welcome",arg[i]);
// }

// const math=require("./math.js");
// console.log(math.sum(2,3));
// console.log(math.div(2,3));
// console.log(math.mul(2,3));

// const info=require("./fruits");
// console.log(info)


import{sum,div,mul} from "./math.js";
import { generate} from "random-words";
console.log(generate());
