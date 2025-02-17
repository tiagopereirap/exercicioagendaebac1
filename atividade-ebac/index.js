document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Verificação do nome
    if (/\d/.test(name)) {
        alert('Por favor, insira um nome válido sem números.');
        return;
    }

    // Verificação do número de telefone
    if (phone.length < 14 || phone.length > 17) {
        alert('Por favor, insira um número de telefone válido com 14 a 17 caracteres (incluindo espaços e hífen).');
        return;
    }

    // Formatação do número de telefone
    phone = phone.replace(/^(\d{2})(\d{2})\s(\d)\s(\d{4})-(\d{4})$/, '+55 $1 $3 $4-$5')
            .replace(/^(\d{2})\s(\d)\s(\d{4})-(\d{4})$/, '$1 $2 $3-$4');

    // Verificação de duplicação do número de telefone
    var tableBody = document.getElementById('contactTableBody');
    var rows = tableBody.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cell = rows[i].getElementsByTagName('td')[1];
        if (cell.textContent === phone) {
            alert('O número de telefone já está cadastrado.');
            return;
        }
    }

    var newRow = tableBody.insertRow();
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    document.getElementById('contactForm').reset();
});
