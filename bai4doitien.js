function doiTien() {
    let Amount = document.getElementById("Amount").value;
    let Form = document.getElementById("from").value;
    let To = document.getElementById("to").value;
    let Result;

    if(Form === "USD" && To === "VND"){
       Result = "Result:" + (Amount*23000) +"VND";
    }else if(Form ==="VND" && To ==="USD"){
        Result ="Result:" + (Amount/23000)+"USD";
    }else if(Form ==="VND"){
        Result ="Result:" + Amount +"VND";
    }else {
        Result ="Result:"+ Amount +"USD";
    }

    document.getElementById("Result").innerText = Result;
}