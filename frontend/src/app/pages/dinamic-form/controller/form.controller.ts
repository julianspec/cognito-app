let formParams: string[] = [];

export function capturarDatos (){

    let elements : any = document.getElementById("my-form");

    for (let i = 0, element; element = elements.elements[i++];) 
    {
        if(!element.disabled){
            formParams.push(element.name + ":" + element.value);
        }
    }

    const Json = JSON.stringify(formParams);
    localStorage.setItem('formParams', Json);
    formParams.splice(0, formParams.length);
}