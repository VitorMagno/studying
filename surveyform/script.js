const getLocalstorage = () => JSON.parse(localStorage.getItem('dbForm')) ?? [];
const setLocalstorage = (dbForm) => localStorage.setItem("dbForm", JSON.stringify(dbForm));

 


const Tempform  = {
    nome: "junin", 
    email: "junin@email.com.br",
    idade: "20",
    cargo: "estudante",
    recomendacao: "definitivamente",
    recursofav: "desafios",
    melhorias: ["front-end", "back-end", "data-visualization"],
    comentario: "piriri pororo piriri pororo piriri pororo piriri pororo piriri pororo piriri pororo piriri pororo piriri pororo"
    
};
/*crud - delete 
const deleteForm = (index) => {
    const dbForm = readForm();
    dbForm.splice(index, 1);
    setLocalstorage(dbForm);

}

crud - update 
const updateForm = (index, form) => {
    const dbForm = readForm();
    dbForm[index] = form;
    setLocalstorage(dbForm);

}

crud - read
const readForm = () => getLocalstorage();



crud - create */
const createForm = (form) => {
    const dbForm = getLocalstorage();
    dbForm.push(form);
    setLocalstorage(dbForm);
    
};

const readForm = () => getLocalstorage();

const isValidFields = () => {
    return document.getElementById('survey-form').reportValidity()
}
    


const saveForm = () => {
    if (isValidFields()) {
        const form = {
            nome: document.getElementById('name').value,
            email: document.getElementById('email').value,
            idade: document.getElementById('idade').value,
            cargo: document.getElementById('dropdown').value,
            recomendacao: radio(document.getElementsByName('recomendacao')),
            recursofav: document.getElementById('recurso-favorito').value,
            melhorias: checkbox(document.getElementsByName('melhorias')),
            comentario: document.getElementById('comentario').value, 
        };
        
        createForm(form);
        console.log ("formulario salvo");
    }
}
//algoritmo para o radiobuttons
const radio = (radiobuttons) => {
    for (let index = 0; index < radiobuttons.length; index++){
        if (radiobuttons[i].checked == true){
            radiobuttons[i] = radiobuttons[i].value;
        };

    };
    return radiobuttons;
};
//algoritmo para o checkbox
const checkbox = (melhorias) => {
    for (i = 0; i < melhorias.lenght; i++){
        if (melhorias[i].checked == true){
            melhorias[i] = melhorias[i].value;
        };
    };
    return melhorias;
};
//eventos
