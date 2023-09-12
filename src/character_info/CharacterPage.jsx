import { Image, Popover, Button } from 'antd'

const CharacterPage = ({ data }) => {
    const content = (
        <div>
          <p><strong>Gender: </strong>{data.gender}</p>
          <p><strong>Status: </strong>{data.status}</p>
          <p><strong>Species: </strong>{data.species}</p>
          <p><strong>Type: </strong>{data.type}</p>
          <p style={{ fontSize: '12px', textAlign: 'center' }}><i>{data.create}</i></p>
        </div>
      );

      console.log(data.gender);
    return ( 
        <>
            <h1>{data.name}</h1>
            <Image src={data.img} />

            <br />
            <br />

            <Popover content={content} trigger='click' title='Description' style={{ textAlign: 'center' }}>
                <Button>Click me</Button>
            </Popover>
        </>
     );
}
 
export default CharacterPage;