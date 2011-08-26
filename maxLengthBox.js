/**
 * @author: Leandro Leite Pinto de Oliveira <lleitep3 at gmail dot com>
 */

(function($){

    $.fn.maxLengthBox = function( options ){

        // Confs
        var conf = {
            'fontColor'      : '#ccc',
            'fontColorFinal' : '#DD0000',
            'definedColor'   : '#ccc',
            'fontSize'       : '0.8em',

            style : function () {
                return 'font-size:' + this.fontSize     + ';'
                + 'color:'      + this.definedColor + ';'
                + 'position:'   + 'absolute'        + ';'
            ;
            }
        }

        // methods of plugin
        var methods = {

            // initialize plugin
            init : function(el){
                el.delegate('focus',function(){
                    methods.exec($(this));
                });

                el.delegate('keyup',function(){
                    methods.exec($(this));
                });

                if( options )
                    $.extend( conf, options );
            },
            // execute function of plugin
            exec : function (el){
                $('#maxLengthBox').remove();
                var val = el.attr('maxlength') - el.val().length;
                this.showBox(el,val);
            },

            setFontColor : function (val){
                conf.definedColor =
                (val == 0)? conf.fontColorFinal : conf.fontColor;
            },

            // create MaxLengthBox
            showBox : function (el, val){
                var offset = el.offset();

                this.setFontColor(val);

                $('body').append('<div id="maxLengthBox" style="'+conf.style()+'">'+val+'</div>');

                offset.left += el.width()  - $('#maxLengthBox').width();
                offset.top  += el.height() - $('#maxLengthBox').height() + 5;

                $('#maxLengthBox').css('left',(offset.left+'px'));
                $('#maxLengthBox').css('top',(offset.top+'px'));
            }
        }

        // start plugin
        methods.init($(this));

    }

})(jQuery);
