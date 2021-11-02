import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Item = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    background-color: blue;
    ${({selected})=>selected&&`
        background-color: green;
    `}
`
const arr =[1, 2, 3, 4, 5, 6, 7]
const Title = () => {
    const [selected, setSelected] = useState(null);
    const handleSelection =(event)=>{
        var xcoord = event.touches ? event.touches[0].pageX : event.pageX;
        var ycoord = event.touches ? event.touches[0].pageY : event.pageY;
        var targetElement = document.elementFromPoint(xcoord, ycoord);
        setSelected(targetElement ? targetElement.id : null)
    }
    const clearSelection =()=> setSelected(null)

    return <Container>
        {arr.map(it => <Item 
        id={it}
        selected={it.toString()===selected}
        onTouchStart={handleSelection}
        onMouseOver={handleSelection}
        onTouchMove={handleSelection}
        onMouseOut={clearSelection}
        onTouchEnd={clearSelection}
        key={it}>{it}</Item>)}
    </Container>
}

export default Title