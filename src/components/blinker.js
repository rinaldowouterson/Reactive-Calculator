function blinker(string, position, color) {
  
  var middleString =`<div class="highlight" style="border-${(position == -1) ? "left":"right"}: 1px solid ${color};">` +string.substr(0+((position == -1) ? 0:position),1) + "</div>" 

    if(position == -1){
      position =0;
    }
  var beginString = string.substr(0,position)
  var endString = string.substr(position+1,string.length-1)
  var newString = beginString+middleString+endString
  
  return newString
  }
  
  export default blinker