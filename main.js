let lab1=[5,5,5,5,10,10];
let lab2=[5,5,5,5,5,5,10];
let lab3=[5,10,10,15];
let lab4_5=[10,5,5,5,5,5,10,10,10,10,5];
let lab6=[5,5,10,5,5,10];
let quiz1=[36];
let lab8=[5,10,10,10,5];
let sum1=0;
for(let i = 0; i < lab1.length; i++){
  sum1 += lab1[i];
}
let sum2=0;
for(let i = 0; i < lab2.length; i++){
  sum2 += lab2[i];
}
let sum3=0
for(let i = 0; i < lab3.length; i++){
  sum3 += lab3[i];
}
let sum4_5=0
for(let i = 0; i < lab4_5.length; i++){
  sum1 += lab4_5[i];
}
let sum6=0
for(let i = 0; i < lab6.length; i++){
  sum1 += lab6[i];
}
function get_sum(lab){
  let sum=0;
  for(let i=0; i<lab.length; i++)
  {
    sum=sum+lab[i];
  }
  return sum;
}
function main(lab1, lab2, lab3, lab4_5, lab6, lab8,quiz1){
  let obj=0;
  obj=0.7*(get_sum(lab1)+get_sum(lab2)/2+get_sum(lab3)+get_sum(lab4_5)+get_sum(lab6)+
  get_sum(lab8))/7 + get_sum(quiz1)*0.3;
  return obj;

}
console.log(main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1));
