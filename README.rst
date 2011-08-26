Bom, surgiu a necessidade e eu decidi transformar em um plugin!!!!


bem simples,

você declara um elemento que seja "<input type=text>" ou "<textarea> </textarea>"  e boa!!!!


exemplo:

index.html

<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>
        <script src="https://github.com/lleitep3/maxLengthBox/blob/master/maxLengthBox.js"></script>
        <script type="text/javascript">
            $('input').maxLengthBox({'fontColor': '#00ff00'});
            $('textarea').maxLengthBox();
        </script>
        <title>MaxLengthBox</title>
    </head>
    <body>
        <input type="text" maxlength="20">
        <input type="text" maxlength="40">
        <input type="text" maxlength="10">
        <textarea maxlength="40"></textarea>
    </body>
</html>