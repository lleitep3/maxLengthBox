Bom, surgiu a necessidade e eu decidi transformar em um plugin!!!!


bem simples,

você declara um elemento que seja "<input type=text"> ou "<textarea />"  e boa!!!!


exemplo:

index.html

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>
<script src="maxLengthBox.js"></script>


<script type="text/javascript">
    $('input').maxLengthBox({'fontColor': '#00ff00'});
    $('textarea').maxLengthBox();
</script>

<input type="text" maxlength="20">
<input type="text" maxlength="40">
<input type="text" maxlength="10">
<textarea maxlength="5"></textarea>
