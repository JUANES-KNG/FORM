function validarNombreApellido() {
    var nom = document.getElementById("nombres").value;
    var ap = document.getElementById("apellidos").value;
    var regex = /\d/;
  
    if (regex.test(nom)) {
      alert('El campo de nombres no puede contener números.');
      return false;
    }
  
    if (regex.test(ap)) {
      alert('El campo de apellidos no puede contener números.');
      return false;
    }
  
    return true;
}

function valiPass() {
    var password = document.getElementById("contra").value;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return false;
    } else if (!password.match(upperCaseLetters)) {
      alert("La contraseña debe tener al menos una letra mayúscula.");
      return false;
    } else if (!password.match(lowerCaseLetters)) {
      alert("La contraseña debe tener al menos una letra minúscula.");
      return false;
    } else if (!password.match(numbers)) {
      alert("La contraseña debe tener al menos un número.");
      return false;
    } else if (!password.match(specialCharacters)) {
      alert("La contraseña debe tener al menos un carácter especial.");
      return false;
    } else {
      alert("La contraseña es válida.");
      return true;
    }
}
  
function proceso() {
    var us = document.getElementById("user");
    var con = document.getElementById("contra");
  
    if (us.value === "" || con.value === "") {
      alert("Usuario y Contraseña son obligatorios");
      return false;
    } else if (us.value === "") {
      alert("El usuario es obligatorio");
      return false;
    } else if (con.value === "") {
      alert("La contraseña es obligatoria");
      return false;
    } else {
      if (!valiPass()) {
        return false;
      }
      alert("BIENVENIDO....");
      location.href = "FORM.html";
      return true;
    }
}  

function verpass(){
    let pass = document.getElementById("contra");
    let typePaw = pass.getAttribute("type");
    if(typePaw=="password"){
        pass.setAttribute("type", "text");
    }else{
        pass.setAttribute("type", "password");
    }
}

var preciosDestinos = {
    "bogota-cali": 190000,
    "bogota-medellin": 165000,
    "bogota-manizales": 135000,
    "bogota-barranquilla": 245000,
    "cali-bogota": 190000,
    "medellin-bogota": 165000,
    "manizales-bogota": 135000,
    "barranquilla-bogota": 245000
};

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validarFormulario()) {
      generarTiquete();
    }
  });
  
  function validarFormulario() {
    // Obtener los valores ingresados por el usuario
    var nombres = document.getElementById("nombres").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var genero = document.getElementById("genero").value;
    var correo = document.getElementById("correo").value.trim();
    var celular = document.getElementById("celular").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var fechaNacimiento = document.getElementById("fecha").value.trim();
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value.trim();
    var pesoEquipaje = document.getElementById("pesoEquipaje").value.trim();
    var destino = document.getElementById("destino").value;
  
    // Validar que los campos no estén vacíos
    if (nombres === "" || apellidos === "" || genero === "" || correo === "" || celular === "" || direccion === "" ||
        fechaNacimiento === "" || tipoDocumento === "" || numeroDocumento === "" || pesoEquipaje === "" || destino === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    // Validar nombres y apellidos
    if (!validarNombreApellido()) {
        return false;
    }
    
    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
  
    // Validar número de celular
    var celularRegex = /^\d{10}$/;
    if (!celularRegex.test(celular)) {
      alert("Por favor, ingrese un número de celular válido (10 dígitos).");
      return false;
    }

    // Validar dirección de residencia
    var direccionRegex = /^[A-Za-z0-9\s#\-]+$/;
    if (!direccionRegex.test(direccion)) {
    alert("Por favor, ingrese una dirección de residencia válida.");
    return false;
    }

    /*document.getElementById("btnCalcularEdad").addEventListener("click", function años() {
        var fechaNacimiento = document.getElementById("fecha").value;
        if (fechaNacimiento) {
          var fechaNacimientoDate = new Date(fechaNacimiento);
          var hoy = new Date();
          var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
          var mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
          if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
          }
          document.getElementById("edad").value = edad + " años";

          if (edad < 18) {
            alert("Debe ser mayor de edad para realizar la compra del tiquete.");
            return false;
          }
        }
    });*/

    // Validar tipo de documento.

    // Obtener el valor seleccionado del campo "Tipo de Documento"
    
    /*var tipoDocumento = document.getElementById("tipoDocumento").value;

    if (tipoDocumento === "") {
    alert("Por favor, seleccione un tipo de documento.");
    return false;
    }*/
    
    /*var tipoDocumentoRadios = document.getElementsByName("tipoDocumento");
    var selectedTipoDocumento = false;

    for (var i = 0; i < tipoDocumentoRadios.length; i++) {
    if (tipoDocumentoRadios[i].checked) {
        selectedTipoDocumento = true;
        break;
    }
    }

    if (!selectedTipoDocumento) {
    alert("Por favor, seleccione un tipo de documento.");
    return false;
    }*/
  
    // Validar número de documento
    var numeroDocumentoRegex = /^\d{10}$/;
    if (!numeroDocumentoRegex.test(numeroDocumento)) {
      alert("Por favor, ingrese un número de documento válido (solo dígitos).");
      return false;
    }
  
    return true;
  }

  // Validar fecha de nacimiento

  function calcularEdad(fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
      edad--;
    }
    return edad;
  }

  /*function marcarCampoInvalido() {
    var campos = ["nombres", "apellidos", "generoMasculino", "generoFemenino", "correo", "celular", "direccion", "fecha", "tipoDocumento", "numeroDocumento", "pesoEquipaje", "destino"];
    campos.forEach(function(campo) {
      var input = document.getElementById(campo);
      if (!input.value.trim() || (input.type === "radio" && !document.querySelector('input[name="genero"]:checked'))) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });
  }*/
  
  function generarTiquete() {
    var nombres = document.getElementById("nombres").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var genero = document.getElementById("genero").value;
    var correo = document.getElementById("correo").value.trim();
    var celular = document.getElementById("celular").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var fechaNacimiento = document.getElementById("fecha").value.trim();
    var edad = calcularEdad(fechaNacimiento);
    if (edad < 18) {
        alert("Debe ser mayor de edad para generar el tiquete.");
        return; // Detenemos la ejecución de la función si no cumple con la edad mínima
    }
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value.trim();
    var pesoEquipaje = document.getElementById("pesoEquipaje").value.trim();
    var destino = document.getElementById("destino").value;
    // Obtener el precio del destino seleccionado
    var destinoValor = document.getElementById("destino").value;
    var preciosDestinos = {
        "bogota-cali": 190000,
        "bogota-medellin": 165000,
        "bogota-manizales": 135000,
        "bogota-barranquilla": 245000,
        "cali-bogota": 190000,
        "medellin-bogota": 165000,
        "manizales-bogota": 135000,
        "barranquilla-bogota": 245000,
    };
    var precioBase = preciosDestinos[destinoValor] || 0;
    // Cálculo del precio total del viaje
    var precioEquipaje = pesoEquipaje * 10;
    var precioTotal = precioBase + precioEquipaje;

    // Generar tiquete con los datos y el precio total
    var tiquete = "Tiquete de Viaje\n\n" +
                    "Nombres: " + nombres + "\n" +
                    "Apellidos: " + apellidos + "\n" +
                    "Género: " + genero + "\n" +
                    "Correo Electrónico: " + correo + "\n" +
                    "Número de Celular: " + celular + "\n" +
                    "Dirección de Residencia: " + direccion + "\n" +
                    "Fecha de Nacimiento: " + fechaNacimiento + "\n" +
                    "Edad: " + edad + " años" + "\n" +
                    "Tipo de Documento: " + tipoDocumento + "\n" +
                    "Número de Documento: " + numeroDocumento + "\n" +
                    "Peso del Equipaje: " + pesoEquipaje + " KG\n" +
                    "Destino de Viaje: " + destino + "\n" +
                    "Precio Base: $" + precioBase + "\n" +
                    "Precio del Equipaje: $" + precioEquipaje + "\n" +
                    "Precio Total del Viaje: $" + precioTotal + "\n" +
                    "¡Tiquete generado exitosamente!";

    // Mostrar el tiquete en una alerta
    alert(tiquete);
}   

    /*function calcularPrecioTotal(destino) {
        var precioTotal = 0;
        
        switch (destino) {
        case "bogota-cali":
            precioTotal = 190000;
            break;
        case "bogota-medellin":
            precioTotal = 165000;
            break;
        case "bogota-manizales":
            precioTotal = 135000;
            break;
        case "bogota-barranquilla":
            precioTotal = 245000;
            break;
        case "cali-bogota":
            precioTotal = 190000;
            break;
        case "medellin-bogota":
            precioTotal = 165000;
            break;
        case "manizales-bogota":
            precioTotal = 135000;
            break;
        case "barranquilla-bogota":
            precioTotal = 245000;
            break;
        }
        
        return precioTotal;
    }
}*/