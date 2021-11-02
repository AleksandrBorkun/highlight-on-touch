let selectedEl = null;

const handleSelection =(event)=>{
    var xcoord = event.touches ? event.touches[0].pageX : event.pageX;
    var ycoord = event.touches ? event.touches[0].pageY : event.pageY;
    var targetElement = document.elementFromPoint(xcoord, ycoord);
    if(selectedEl){
        selectedEl.classList.remove('selected')
    }
    targetElement.classList.add("selected");
    selectedEl = targetElement
}

const clearSelection =(event)=> {
    if(selectedEl){
        selectedEl.classList.remove('selected')
    }
}