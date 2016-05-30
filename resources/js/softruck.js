// Verifica se o browser do usuario tem suporte a geolocation
function pegaLocalizacao() {
    var main = Ext.getCmp('panelMain');
    if ( navigator.geolocation ){
        navigator.geolocation.getCurrentPosition( 

            // sucesso! 
            function( position ){
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                Ext.getBody().mask("Aguarde! Estamos tentando te localizar...");

                var store = Ext.getStore('cidade');
                store.proxy.extraParams.url = latitude+','+longitude;
                store.load({
                    callback: function(records, operation, success) {
                        if (success) {
                            main.lookupReference('cidade').setValue(records[0].data.formatted_address);
                            main.getController().pesquisa();
                        }
                        Ext.getBody().unmask();
                    }
                });

            },

            // erro
            function ( erro ){
                var erroDescricao = 'Ops, ';
                switch( erro.code ) {
                    case erro.PERMISSION_DENIED:
                        erroDescricao += 'usuário não autorizou a Geolocalização.';
                        break;
                    case erro.POSITION_UNAVAILABLE:
                        erroDescricao += 'localização indisponível.';
                        break;
                    case erro.TIMEOUT:
                        erroDescricao += 'tempo expirado.';
                        break;
                    case erro.UNKNOWN_ERROR:
                        erroDescricao += 'não sei o que foi, mas deu erro!';
                        break;
                }
                Ext.toast({
                    html: erroDescricao,
                    closable: true,
                    align: 't',
                    slideInDuration: 400,
                    minWidth: 400
                });
                //main.lookupReference('cidade').enable();
                main.lookupReference('cidade').focus();
            }
        );
    } else {
        Ext.toast({
            html: 'Ops, seu navegador não possue Geolocalização! Atualize o quanto antes.',
            closable: true,
            align: 't',
            slideInDuration: 400,
            minWidth: 400
        });
        main.lookupReference('cidade').focus();
        //main.lookupReference('cidade').enable();
    }
}