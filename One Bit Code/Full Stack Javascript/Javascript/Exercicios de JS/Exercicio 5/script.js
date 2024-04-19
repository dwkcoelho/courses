let times = 0
let option

const name = prompt('What is ship name?')
option = prompt('Do you want to enter the space warp? \n1. Yes\n2. No');
while(option === '1') {
    times++
    option = prompt('Do you want to do the next space warp? \n1. Yes\n2. No');
}
alert(`The ${name} ship did ${times} times space warp!`) 