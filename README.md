<!-- input field number type length validation in React js -->
<input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)}/>


 {/*   {shipping} <p>{cTime}__ {cDate}</p> <p>orderNumber {orderNumber}</p> */}

    /*  Importent --- week name with date
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    var now = today.toLocaleString('en-US', options);
    console.log(now);
    */