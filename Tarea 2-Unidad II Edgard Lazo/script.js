document.addEventListener("DOMContentLoaded", function () {
    const acapite1 = document.getElementById("acapite1");
    const acapite2 = document.getElementById("acapite2");
    const acapite3 = document.getElementById("acapite3");
    const acapite4 = document.getElementById("acapite4");
    const mostrarMensajeBtn = document.getElementById("mostrarMensaje");
    const mensaje = document.getElementById("mensaje");
    const formulario = document.getElementById("formulario");
    const submit = document.getElementById("submit");
    const mostrarBtn  = document.getElementById("mostrar");
    const adminTable = document.getElementById("adminTable");
    
        const data = [];

  


    acapite1.addEventListener("click", function () {

        mensaje.style.display = "none";
        formulario.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        mostrarBtn.style.display = "none";
        adminTable.style.display = "none";
        acapite2.style.display = "block";
        
    });
    acapite2.addEventListener("click", function () {
       
        mensaje.style.display = "none";
        formulario.style.display = "none";
        mostrarBtn.style.display = "none";
        adminTable.style.display = "none";
        mostrarMensajeBtn.style.display = "block";
       
        
    });

    acapite3.addEventListener("click", function () {
        mensaje.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        mostrarBtn.style.display = "none";
        formulario.style.display = "none";
        adminTable.style.display = "none";
        acapite4.style.display = "block"
    });
   
    acapite4.addEventListener("click", function () {
        mensaje.style.display = "none";
        mostrarMensajeBtn.style.display = "none";
        mostrarBtn.style.display = "none";
        adminTable.style.display = "block";
        formulario.style.display = "block";
        
    });
 
    mostrarBtn.addEventListener("click", function () {
        adminTable.style.display = "block";
    })


    mostrarMensajeBtn.addEventListener("click", function () {
        mensaje.style.display = "block";
    });

    mensaje.addEventListener("click", function () {
        mensaje.style.display = "none";
    });
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;

        if (name && apellido && email) {
            data.push({ name, apellido, email });
            updateTable();
            formulario.reset();
        }
    });

   function updateTable() {
        tableBody.innerHTML = '';

        data.forEach((item, index) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            const row1 = document.createElement('tr');
            const nameCell1 = document.createElement('td');
            nameCell1.textContent = item.apellido;
            const emailCell = document.createElement('td');
            emailCell.textContent = item.email;
            const actionsCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', function() {
                data.splice(index, 1);
                updateTable();
            });
            actionsCell.appendChild(deleteBtn);
            
            row.appendChild(nameCell);
            row.appendChild(nameCell1);
            row.appendChild(emailCell);
            row.appendChild(actionsCell);
            
            tableBody.appendChild(row);
        });
    }
    
   
    
});
