function validacao () {
	if (document.form.nome.value==""){
		alert("Por favor, preencha o campo nome.");
		document.form.nome.focus();
		return false;
	}
	
	if (document.form.telefone.value==""){
		alert("Por favor, preencha o campo nome.");
		document.form.telefone.focus();
		return false;
	}
	
	if (document.form.assunto.value==""){
		alert("Por favor, preencha o campo nome.");
		document.form.assunto.focus();
		return false;
	}
	
	if(document.form.email.value== "" || document.form.email.value.indexOf('@')==-1|| document.form.email.value.indexOf('.')==-1) {
		alert("Por favor, digite um endereço de email válido!");
		document.form.email.focus();
		return false; 
	}
	
	if(document.form.mensagem.value.length > 300) {
		alert("A mensagem não pode conter mais de 300 caracteres");
		document.form.mensagem.focus();
		return false;
	}
	
}