
function getData(){

    $('#grdDatos tr').on('click', function(){
        
        var dato1  = $(this).find('td:nth-child(2)').html();
        var dato2  = $(this).find('td:nth-child(3)').html();
        var dato3  = $(this).find('td:nth-child(4)').html();
        var dato4  = $(this).find('td:nth-child(5)').html();
        var dato5  = $(this).find('td:nth-child(6)').html();
        var dato6  = $(this).find('td:nth-child(7)').html();
        var dato7  = $(this).find('td:nth-child(8)').html();
        var dato8  = $(this).find('td:nth-child(9)').html();
        var dato9  = $(this).find('td:nth-child(10)').html();
        var dato10 = $(this).find('td:nth-child(11)').html();

        if(dato1 == "" || dato1 == null || dato1 == undefined){dato1 = '0';}    
        if(dato2 == "" || dato2 == null || dato2 == undefined){dato2 = '0';}    
        if(dato3 == "" || dato3 == null || dato3 == undefined){dato3 = '0';}    
        if(dato4 == "" || dato4 == null || dato4 == undefined){dato4 = '0';}    
        if(dato5 == "" || dato5 == null || dato5 == undefined){dato5 = '0';}    
        if(dato6 == "" || dato6 == null || dato6 == undefined){dato6 = '0';}    
        if(dato7 == "" || dato7 == null || dato7 == undefined){dato7 = '0';}    
        if(dato8 == "" || dato8 == null || dato8 == undefined){dato8 = '0';}    
        if(dato9 == "" || dato9 == null || dato9 == undefined){dato9 = '0';}    
        if(dato10 == "" || dato10 == null || dato10 == undefined){dato10 = '0';}  

        localStorage.setItem('modo', 'edit');
        localStorage.setItem('saveBtn', 'S');
        localStorage.setItem('delBtn',  'S');
        localStorage.setItem('dato1', dato1);
        localStorage.setItem('dato2', dato2);
        localStorage.setItem('dato3', dato3);
        localStorage.setItem('dato4', dato4);
        localStorage.setItem('dato5', dato5);
        localStorage.setItem('dato6', dato6);
        localStorage.setItem('dato7', dato7);
        localStorage.setItem('dato8', dato8);
        localStorage.setItem('dato9', dato9);
        localStorage.setItem('dato10', dato10);
      });

}

