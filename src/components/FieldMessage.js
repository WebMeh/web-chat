import { BsSendFill } from 'react-icons/bs'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'

const FieldMessage = () => {
    return (
        <InputGroup className="mb-3">
            
            <Form.Control placeholder='write a message . . . '
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
            />
            <Button variant="outline-secondary" id="button-addon1">
                <BsSendFill />
            </Button>
        </InputGroup>
    )
}

export default FieldMessage