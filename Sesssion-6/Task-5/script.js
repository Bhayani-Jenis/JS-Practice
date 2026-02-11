function downloadFile(url,callback){
        setTimeout(()=>{
            console.log(`Download complete:[${url}]`);
            // if(callback)callback();
            callback?.()
        },3000)

}

function call(){
    console.log("this is a callback function");
    
}
downloadFile('https://www.google.com',call)