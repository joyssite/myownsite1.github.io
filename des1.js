function insert(number){
    var exist=$(".result").val();
$(".result").val(exist+number)
}

function clearRes(){
    $(".result").val('')
}

function calculate(){
    var result=eval($(".result").val()) 
    $(".result").val(result)
}

function Delete(){
    var prsnt=$(".result").val()
    if(prsnt!=''){
        $(".result").val(prsnt.slice(0,-1))
    }
}

