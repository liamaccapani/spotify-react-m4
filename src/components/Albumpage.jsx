import { Container } from 'react-bootstrap';

const AlbumPage = () => {
    const fetchData = async () => {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/')
    }

    return(
        <Container>
            <div>

            </div>
        </Container>
    )
}

export default AlbumPage