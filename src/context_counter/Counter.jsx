import { useCounterStore } from "./store";
import { Button, Row, Col } from "antd";


const Counter = () => {

    const { increment, decrement } = useCounterStore()

    return ( 
        <>
        
            <Row>
                <Col>
                    <Button onClick={decrement}>
                        Decrement
                    </Button>
                </Col>
                <Col>
                    <Button onClick={increment}>
                        Increment
                    </Button>
                </Col>
            </Row>
            

        </>
     );
}
 
export default Counter;