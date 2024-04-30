import './Counter.css';


/**
    <script>
        $(document).ready(function () {
            function setCounter(number) {
                $("#counter").val(number);
            } 
            function getCounter() {
                return Number($("#counter").val()); 
            } 
            $("#plus").click(function (e) { 
                setCounter(getCounter()+1);
                
            });
            $("#minus").click(function (e) {
                setCounter(getCounter()-1);
            });
        });

    </script> 



 */

function Counter() {
  return (
    <>
      <input type='text'
       name='counter'
       defaultValue={0}
       onChange={(e) => {console.log(e);}} />

      <input type="button" defaultValue="+" id="plus"/>
      <input type="button" defaultValue="-" id="minus"/>
    </>
  );
}

export default Counter;
