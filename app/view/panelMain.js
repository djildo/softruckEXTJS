/*
 * File: app/view/panelMain.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('softruck.view.panelMain', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.panelMain',

    requires: [
        'softruck.view.panelMainViewModel',
        'softruck.view.panelMainViewController',
        'Ext.form.field.Display',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.slider.Single'
    ],

    controller: 'panelmain',
    viewModel: {
        type: 'panelmain'
    },
    id: 'panelMain',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'center',
            id: 'mapa',
            margin: '20px 0 0 0',
            style: '{\n-moz-border-radius:9px;\n-webkit-border-radius:9px;\nborder-radius:9px;\nbackground-color: rgba(255, 255, 255, 0.6);\n}',
            listeners: {
                afterlayout: 'onMapaAfterLayout'
            }
        },
        {
            xtype: 'container',
            flex: 0.5,
            region: 'west',
            reference: 'esquerda',
            maxWidth: 70
        },
        {
            xtype: 'container',
            flex: 0.5,
            region: 'east',
            reference: 'direita',
            maxWidth: 70
        },
        {
            xtype: 'container',
            region: 'north',
            reference: 'topo',
            height: 150,
            margin: '20px 0 0 0',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 0.5,
                    maxWidth: 70
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 0.5,
                            minWidth: 280,
                            style: '{\n-moz-border-radius:9px;\n-webkit-border-radius:9px;\nborder-radius:9px;\nbackground-color: rgba(255, 255, 255, 0.6);\n}',
                            layout: 'form',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    hideLabel: true,
                                    value: 'Informe como deseja realizar sua pesquisa.',
                                    fieldStyle: 'font-weight:bold'
                                },
                                {
                                    xtype: 'radiogroup',
                                    reference: 'tpPesquisa',
                                    layout: 'form',
                                    hideLabel: true,
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            hideLabel: true,
                                            name: 'filtro',
                                            boxLabel: 'Por categoria, utilizando minha localização',
                                            checked: true,
                                            inputValue: '1'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            hideLabel: true,
                                            name: 'filtro',
                                            boxLabel: 'Os 5 cincos lugares mais visitados',
                                            inputValue: '2'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            hideLabel: true,
                                            name: 'filtro',
                                            boxLabel: 'Por regiões mais visitadas',
                                            inputValue: '3'
                                        }
                                    ],
                                    listeners: {
                                        change: 'onRadiogroupChange'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: '0 0 0 20px',
                            style: '{\n-moz-border-radius:9px;\n-webkit-border-radius:9px;\nborder-radius:9px;\nbackground-color: rgba(255, 255, 255, 0.6);\n}',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'container',
                                    reference: 'pesquisaCat',
                                    margin: '5px 5px 0 0',
                                    layout: 'form',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            reference: 'cidade',
                                            hideLabel: true,
                                            allowBlank: false,
                                            blankText: 'Campo obrigatório',
                                            emptyText: 'Pesquisa por Cidade. ex. Cáceres',
                                            listeners: {
                                                specialkey: 'onTextfieldSpecialkey'
                                            }
                                        },
                                        {
                                            xtype: 'textfield',
                                            reference: 'categoria',
                                            hideLabel: true,
                                            emptyText: 'Procurar por Categoria. ex. Cinema',
                                            listeners: {
                                                specialkey: 'onTextfieldSpecialkey1'
                                            }
                                        },
                                        {
                                            xtype: 'displayfield',
                                            bind: '{lbRaio}',
                                            reference: 'lbRaio',
                                            hideLabel: true,
                                            value: 'Dentro de 1.5 km',
                                            fieldStyle: 'font-weight:bold'
                                        },
                                        {
                                            xtype: 'slider',
                                            bind: '{distancia}',
                                            reference: 'distancia',
                                            hideLabel: true,
                                            value: 1500,
                                            increment: 500,
                                            maxValue: 10000,
                                            minValue: 1500,
                                            listeners: {
                                                changecomplete: 'onSliderChangeComplete'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.5,
                    maxWidth: 70
                }
            ]
        },
        {
            xtype: 'container',
            region: 'south',
            reference: 'rodape',
            height: 30
        }
    ],
    listeners: {
        afterlayout: 'onViewportAfterLayout'
    }

});