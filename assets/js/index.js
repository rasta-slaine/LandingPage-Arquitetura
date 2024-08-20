document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

     
    const formData = new FormData(e.target) // Create the FormData object

    // Create a empty object to store
    const data = {}
    
    // insert the value in the data object
    formData.forEach((value,key)=>{
        data[key] = value;
    })

    // post
    fetch('https://api.sheetmonkey.io/form/84BnSayKx2Etc6pZwZzdkv',{
        method:'post',
        headers:{
         'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then( data=>{
        //console.log(data);
        alert('Formulario enviado!');
    }).catch(error => {
          console.error('Error:', error);
    });
})