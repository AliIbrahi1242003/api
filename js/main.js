var myHttp=new XMLHttpRequest()
myHttp.open('Get',"https://fakestoreapi.com/products")
myHttp.send()
var data=[]
myHttp.addEventListener("readystatechange",function(){
    if(myHttp.readyState==4){
        console.log(myHttp.response)
        data=JSON.parse(myHttp.response)
        console.log(data)
        display()
    }
})
function display() {
    cols=""
    for(var i=0 ; i<data.length;i++){
        cols+=`
        <div class="col-md-3 my-3">
             <div class="card h-100 border-1 rounded-3 bg-color">
                <img src="${data[i].image}" alt="${data[i].title}" class="w-100 card-img-top" style="height: 250px;">
                <div class="card-body">
                    <h4 class="card-title">${data[i].title}</h4>
                    <span class="card-text">${data[i].description.substring(0,100)}</span>
                    <h4 class="text-danger text-center">${data[i].price} $</h4>
                    <h6 class="text-success text-center">${data[i].rating.rate} (${data[i].rating.count})</h6>
                </div>
            </div>
        </div>
        `
        document.getElementById("rowData").innerHTML=cols
    }
}