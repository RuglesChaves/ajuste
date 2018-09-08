//INICIO DE BLOQUEIO NIVEL RUGLES 
//alterar moment(helper.dataHoje(),'DD/MM/YYYY 00:00:00').toDate()  POR feriadoDia criar no helper

Feriado.findOne({'data-feriado':moment(helper.dataHoje(),'DD/MM/YYYY 00:00:00').toDate()}, function(err, feriado){
	Bloqueio.findOne({nome: cliente.nivel}, function(err, bloqueio){

	if (equipamento === true) { // if(!equipamento === true) => DEVERÁ SER O CORRETO

		console.log('LIBERAÇÂO NO TERMINAL')
		
	}else{

		console.log('LIBERAÇÂO NO EQUIPAMENTO')

		if (cliente.nivel === 'LIVRE') {

			console.log('LIVRE SEM NIVEL')
			
		}else{
	
			if(feriado){
					
				for (var config of bloqueio.configs) {

					
					
				if (config.dias.indexOf('Feriado') > -1 && config.dias.indexOf(helper.diaSemana()) > -1 && config.hora_inicio <= helper.getHora() &&  config.hora_fim >= helper.getHora() ) {
						while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome
							console.log('liberado Feriado E SEMANA e HOrario COM FERIADO ' +config.sentido )
							break
						}
							
					}else{

					
						

						while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome						
							switch (config.hora_inicio >= helper.getHora() && helper.getHora() <= config.hora_fim ) {
								case true:
								console.log('BLOQUEIO NA HORA || COM FERIADO ' +config.sentido)
									break;
							
								default:
								
									break;
							}
							break
						}

					

							
					while (config.sentido.indexOf('ADMINISTRADOR') > -1 )  { //alterar para equipamento.nome						
						switch (config.dias.indexOf('Feriado')) {
							case -1:
							console.log('BLOQUEIO POR FERIADO || COM FERIADO ' +config.sentido)
								break;
						
							default:
							
								break;
						}
						break
					}

						while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome
						switch (config.dias.indexOf(helper.diaSemana())) {
							case -1:
								console.log('BLOQUEIO POR DIA || COM FERIADO ' +config.sentido)
								break;
								
							default:
									
								break;
						}
						break
					}
				}
					break
				}
	
			}else{
	
				var eqp = 'ADMINISTRADOR'		
					for (var config of bloqueio.configs) {
	
					if (config.dias.indexOf(helper.diaSemana()) > -1 && config.hora_inicio <= helper.getHora() &&  config.hora_fim >= helper.getHora() ) {
							while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome
								console.log('liberado Feriado E SEMANA e HOrario' +config.sentido)
								break
							}	
						}else{
							while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome						
                                switch (config.hora_inicio >= helper.getHora() && helper.getHora() <= config.hora_fim ) {
                                    case true:
                                    console.log('BLOQUEIO NA HORA || COM FERIADO ' +config.sentido)
                                        break;
                                
                                    default:
                                    
                                        break;
                                }
                                break
                            }
        
                                while (config.sentido.indexOf('ADMINISTRADOR') > -1) { //alterar para equipamento.nome
                                switch (config.dias.indexOf(helper.diaSemana())) {
                                    case -1:
                                        console.log('BLOQUEIO POR DIA || SEM FERIADO ' +config.sentido)
                                        break;
                                        
                                    default:
                                            
                                        break;
                                }
                                break
                            }
					}
	
				}
			}
		}

	}
	
	})
})

		

