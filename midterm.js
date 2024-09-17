function openForm() {
    const form = document.getElementById('clothes-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function add() {
    const imgInput = document.getElementById('img');
    const name = document.getElementById('name').value;
    const npr = document.getElementById('n-pr').value;
    const opr = document.getElementById('o-pr').value;
    const type = document.getElementById('type').value;

    if (!imgInput.files.length || !name || isNaN(npr) || !type) {
        alert("Vui lòng nhập đầy đủ thông tin của sản phẩm");
        return;
    }

    const imgSrc = URL.createObjectURL(imgInput.files[0]);

    const cardHTML = `
        <div class="card">
            <img src="${imgSrc}" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-type">Type: ${type}</p>
                <p class="card-text">New Price: $${npr}</p>
                <p class="card-text" style="text-decoration: line-through;">Old Price: $${opr}</p>
            </div>
        </div>`;

    const productNam = document.getElementById('p-nam');
    const productNu = document.getElementById('p-nu');

    if (type === "nam") {
        productNam.innerHTML += cardHTML;
    } else if (type === "nữ") {
        productNu.innerHTML += cardHTML;
    }

    // Reset form
    document.getElementById('clothes-form').reset();
    imgInput.value = ""; // Clear file input
}