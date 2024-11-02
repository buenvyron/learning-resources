console.log('3')
setTimeout(()=>{
    console.log('2');
}, 1000)
setTimeout(()=>{
    console.log('1');
}, 2000)
setTimeout(()=>{
    console.log('3 seconds has elapsed');
    console.log('Thank you for waiting!');
}, 3000)