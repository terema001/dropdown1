import React, {useState} from 'react'
import { Container } from './styled/Container.styled';
import { List } from './styled/List.styled';
import { Listul } from './styled/Listul.styled';

function Dropdown() {
    const [state, setState] = useState(false);
    const showDropDown = () => {
        setState(true)
    }
    const hideDropDown = () => {
        setState(false)
    }
  return (
    <div>
        <Container  className="menu" onClick={showDropDown} onDoubleClick={hideDropDown}>
            Dropdown ⮟
            <Listul>
             <List>{state ? ( <ul onClick={showDropDown}>
            
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            </ul>):null}
            </List>
            </Listul>

        </Container>
    </div>
  )
}

export default Dropdown