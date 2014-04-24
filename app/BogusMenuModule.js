/*!
* Ext JS Library
* Copyright(c) 2006-2014 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Desktop.BogusMenuModule', {
    extend: 'Ext.ux.desktop.Module',

    init : function() {
        var me = this;
        
        me.launcher = {
            text: 'More items',
            iconCls: 'bogus',
            handler: function() {
                return false;
            },
            menu: {
                items: []
            }
        };

        me.modules = me.getModules();
        
        if (me.modules) {
            me.attatchModules(me.modules);
        }
    },

    getModules : function(){
        return [
            Ext.create('Desktop.GridWindow')
        ];
    },

    attatchModules : function(modules){
        var me = this;

        Ext.each(modules, function (module) {
            me.launcher.menu.items.push({
                text: module.launcher.text,
                iconCls:module.launcher.iconCls,
                handler : module.createWindow,
                scope: module,
                windowId: module.id
            });
        });
    }
});