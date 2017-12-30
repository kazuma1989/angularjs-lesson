let BA0010UA = {

    text: "",

    send() {
        BA0010UModel.send(this.text);
    }

};


// -----
let bt1 = document.body.querySelector("#bt1");
bt1.onclick = () => {
    let tx1 = document.body.querySelector("#tx1");
    console.log(tx1.value);

    BA0010UModel.send(this.text);
};
