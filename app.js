let no = 0;
document.getElementById('btn-coffee').addEventListener('click', function (event) {
    no += 1;
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const price = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const quantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const total = parseInt(price) * parseInt(quantity);

    tableData(no, name, price, quantity, total);

    disabledButton('btn-coffee');
});

document.getElementById('btn-heart').addEventListener('click', function (event) {
    no += 1;
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const price = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const quantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const total = parseInt(price) * parseInt(quantity);

    tableData(no, name, price, quantity, total);

    disabledButton('btn-heart');
});

document.getElementById('btn-panda').addEventListener('click', function (event) {
    no += 1;
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const price = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const quantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const total = parseInt(price) * parseInt(quantity);

    tableData(no, name, price, quantity, total);

    disabledButton('btn-panda');
});

document.getElementById('btn-umbrella').addEventListener('click', function (event) {
    no += 1;
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const price = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const quantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const total = parseInt(price) * parseInt(quantity);

    tableData(no, name, price, quantity, total);

    disabledButton('btn-umbrella');
});

document.getElementById('btn-vue').addEventListener('click', function (event) {
    no += 1;
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const totalPriceString = event.target.parentNode.parentNode.children[2].value;
    const price = parseInt(totalPriceString);
    const quantityString = event.target.parentNode.parentNode.children[3].value;
    const quantity = parseInt(quantityString);

    if (isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        return alert('Input a number');
    };

    const total = price * quantity;

    tableData(no, name, price, quantity, total);

    disabledButton('btn-vue');
});


function tableData(no, name, price, quantity, total) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${no}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td id="total-price">${total}</td>
    `;
    tableContainer.appendChild(tr);

    const totalProducts = document.getElementById('total-products');
    totalProducts.innerText = no;

    const grandTotalElement = document.getElementById('grand-total');
    const grandTotalString = grandTotalElement.innerText;
    const grandTotalValue = parseInt(grandTotalString);
    const grandTotal = grandTotalValue + total;
    grandTotalElement.innerText = grandTotal;
};

function disabledButton(buttonId) {
    document.getElementById(buttonId).setAttribute('disabled', true);
};