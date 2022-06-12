window.addEventListener('DOMContentLoaded', function (e) {
    var cont = 2;

    var button1 = document.getElementById('btn-field1');

    button1.addEventListener("click", e => {
        const id = e.target.getAttribute("id").slice(9);
        var valor = document.getElementById('input-field' + id).value;
        if(valor % 1 == 0)AgregarItems(valor);
        VisualizarTexto(id, valor);
        
        document.querySelectorAll(".click").forEach(el => {
            el.addEventListener("click", e => {
                const id = e.target.getAttribute("id").slice(9);
                var valor = document.getElementById('input-field' + id).value;
                VisualizarTexto(id, valor);
            });
        });
    
    });

    

    function VisualizarTexto(id, valor) {
        document.getElementById('lbl-valor' + id).innerHTML = valor;
        document.querySelector('.text').classList.add('motion');
    }

    function AgregarItems(valor) {
        document.getElementById('items').innerHTML = "";
        var html = "";
        for (var i = 0; i < valor; i++) {
            html += `<div class="content-items">
                            <input type="text" id="input-field`+ cont + `" class="input-text" placeholder="Un campo de texto">
                            <input type="button" class="boton click" id="btn-field`+ cont + `" value="Button"/>
                            <div class="">
                                <span id="lbl-valor`+ cont + `" class="lbl-valor"></span>
                            </div>
                        </div>`;
            cont++;
        }

        document.getElementById('items').innerHTML = html;
    }
});