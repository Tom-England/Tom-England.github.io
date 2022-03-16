function get_time(){
    const d = new Date();
    const hours = d.getUTCHours();
    const minutes = d.getUTCMinutes();
    let time_string = String(hours) + ":" + String(minutes);
    return time_string;
}

function set_time(){
    document.getElementById("time").innerHTML = get_time()
}

set_time();
setInterval(set_time, 1000);