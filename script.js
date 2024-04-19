    document.getElementById("btn2").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
 
    const registro=document.getElementById('nome');
    const nome=registro.value;

    const registro2=document.getElementById('idade');
    const idade=registro2.value;

    const registro3=document.getElementById('email');
    const email=registro3.value;

    const registro4=document.getElementById('senha1');
    const senha1=registro4.value;

    const registro5=document.getElementById('senha2');
    const senha2=registro5.value;
    

    localStorage.setItem("nome",nome);
    localStorage.setItem("idade",idade);
    localStorage.setItem("email",email);
    localStorage.setItem("senha1",senha1);
    localStorage.setItem("senha2",senha2);
    if(senha1==senha2){
      Swal.fire({
        title: "Registro efetuado com sucesso!",
        icon: "success"
      });
      let users=new Array();
    if(localStorage.hasOwnProperty("users")){

      
      users=JSON.parse(localStorage.getItem("users"));
      
    }
    
    users.push({nome,idade,email,senha1,senha2});
    localStorage.setItem("users",JSON.stringify(users))

    console.log(users[0].nome);
  
    }

    else{
      Swal.fire({
        title: "Senha incorreta!",
        text: "Tente novamente!",
      });
    }
    
   
  });
  
  document.getElementById("btn1").addEventListener("click", function(event) {
    event.preventDefault();

    const registro6=document.getElementById('emaillogin');
    const emailogin=registro6.value;
    console.log(emailogin);

    const senhalogin=document.getElementById('senhalogin');
    const senhalog=senhalogin.value;
    console.log(senhalog);
    users=JSON.parse(localStorage.getItem("users"));

    
    for(i=0 ;i<10000;i++){
       if(users[i].email===emailogin&&users[i].senha1===senhalog){

        Swal.fire({
          title:"Bem-Vindo "+users[i].nome+"!",
          text: "Aqui é o melhor lugar para seus investimentos!",
        });
       
       }
       
       else if(users[i].email===emailogin&&users[i].senha1!=senhalog){

        Swal.fire({
          title:"Senha incorreta!",
        });
       
      }

  
      else{
        Swal.fire({
          title:"Email ou senhas incorretos!",
        });
      }

     }
    
    
  })

