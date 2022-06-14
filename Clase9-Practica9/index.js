window.addEventListener('DOMContentLoaded', function (e) {


    const apiUrl = "https://bp-marvel-api.herokuapp.com/"
    const paramsRequest = {
        idAuthor: 1
    }

    const dparamsRequest = {
        idAuthor: 2
    }

    axios.get(`${apiUrl}marvel-characters`, {
        params: {
            ...paramsRequest
        }
    }).then(response => {

        var listPersonajes = document.getElementById('listPersonajes');
        listPersonajes.innerHTML = "";
        var html = ``;
        cont = 1;
        response.data.forEach(element => {
            html += `<div class="card mb-3 ps-1">
                    <div class="row g-0 ">
                        <div class="col-md-2 mt-1">
                            <img src="${element.image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title mb-4" id="title_${element._id}">${element.title}</h5>
                                <p class="card-text" id="descrip_${element._id}">${element.body}</p>
                            </div>
                        </div>
                        <div class="col text-center  ">
                            <div class="mt-5 mb-2">
                                <button class="btn btn-actions btn-light " >e</button>
                            </div>
                            <div >
                                <button class="btn btn-actions btn-light delete" id="delete_${element._id}">d</button>
                            </div>
                        </div>
                    </div>
                </div>`
        });
        listPersonajes.innerHTML = html;

        DeletePersonaje();

    });

    var btn_nuevo = document.querySelector('#btn_nuevo');

    btn_nuevo.addEventListener('click', function (e) {
        var addNuevo = document.getElementById('addNuevo');
        if (addNuevo.style.display === "none") {
            addNuevo.style.display = "block";
        } else {
            addNuevo.style.display = "none";
        }
    });


    var btn_save = this.document.querySelector("#btn_save");
    btn_save.addEventListener('click', function (e) {

        var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        var imagen = document.getElementById("imagen").value;

        var data = {
            title: nombre,
            body: descripcion,
            image: imagen,
            category: "main"
        }

        axios.post(`${apiUrl}marvel-characters`, data, {
            params: {
                ...paramsRequest
            }
        }).then(r => {
            location.reload();
        });

    });

    function DeletePersonaje() {
        document.querySelectorAll(".delete").forEach(el => {
            el.addEventListener("click", e => {
                debugger;
                const id = e.target.getAttribute("id").split("_")[1];

                axios.delete(`${apiUrl}marvel-characters/${id}`, {
                    params: {
                        ...paramsRequest
                    }
                }).then(r => {
                    //console.log(r.data)
                    location.reload();
                });
            });
        });
    }
    

});