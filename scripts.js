document.addEventListener('DOMContentLoaded', function () {
    let arrColor = ["black", "brown", "violet", "blue", "green", "yellow", "orange", "red"];

    function randomClr() {
        return arrColor[Math.floor(Math.random() * 8)];

    };


    let header = document.createElement("h1");
    let hdrText = document.createTextNode("This is an h1.");
    header.className = "h1";
    header.appendChild(hdrText);

    let header2 = document.createElement("h2");
    let hdr2Text = document.createTextNode("This is an h2.");
    header2.className = "h2";
    header2.appendChild(hdr2Text);

    let header3 = document.createElement("h3");
    let hdr3Text = document.createTextNode("This is an h3.");
    header3.className = "h3";
    header3.appendChild(hdr3Text);

    let header4 = document.createElement("h4");
    let hdr4Text = document.createTextNode("This is an h4.");
    header4.className = "h4";
    header4.appendChild(hdr4Text);

    let header5 = document.createElement("h5");
    let hdr5Text = document.createTextNode("This is an h5.");
    header5.className = "h5";
    header5.appendChild(hdr5Text);

    let header6 = document.createElement("h6");
    let hdr6Text = document.createTextNode("This is an h6.");
    header6.className = "h6";
    header6.appendChild(hdr6Text);


    let headerContainer = document.createElement("div");
    headerContainer.className = "header-container";

    headerContainer.appendChild(header);
    headerContainer.appendChild(header2);
    headerContainer.appendChild(header3);
    headerContainer.appendChild(header4);
    headerContainer.appendChild(header5);
    headerContainer.appendChild(header6);

    document.body.appendChild(headerContainer);

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Click to add new list item");
    btn.className = "addClrBtn";
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let myList = document.createElement("ul");
    let liIndex = 0;

    btn.addEventListener("click", function () {
        let li = document.createElement("li");
        let liText = document.createTextNode("This is list item " + (liIndex + 1));
        li.appendChild(liText);

        li.addEventListener("click", function () {
            li.style.color = randomClr();
        });

        li.addEventListener("dblclick", function () {
            li.remove();
        });

        document.body.appendChild(li);
        liIndex++;

    });
    
});