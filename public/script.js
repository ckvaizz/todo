if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(res=>console.log("registered",res))
    .catch(err=>console.log("err",err))
}else{
    alert("serviceworker not found");

}