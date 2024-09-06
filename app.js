function pesquisar() {  
        // Obtém a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");
        
        // Verifica se a seção foi encontrada no DOM (para depuração)
        console.log(section);
    
        // Inicializa uma string vazia para armazenar os resultados formatados
        let resultados = "";
    
        // Itera sobre cada item da lista de dados
        for (let dado of dados) {
            // Concatena o HTML de um resultado à string 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descrição-meta">${dado.descrição} </p>
                    <a href=${dado.link} target="_blank"> mais informações</a>
                </div>
            `;
        }
    
        // Atribui o conteúdo HTML gerado à seção de resultados
        section.innerHTML = resultados;
    }


