  var count=1;
  function add(){
    var add= "<p id='"+ count +"'>"+ 
        "<input type='text'>" +
         "<input type='file' id='file' onchange='filename(this)'>"+
         "<select>"+
         "<option value=''>Select</option>" +
         "<option value='primary'>Primary Image</option>" +
         "<option value='secondary'>Secondary Image</option>"+
         "</select>"+
         "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:void(0);' onclick='$(this).parent().remove();'>Remove</a>"+
         "</p>";
  count++;
  $("#another").append(add);
}