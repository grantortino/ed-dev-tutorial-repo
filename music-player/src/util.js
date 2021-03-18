import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: 'Jazz Cabbage',
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            active: true,
            color: ['#E4C3BA', '#BCB5C5'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997'
        },
        {
            name: 'Lagoons',
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            active: false,
            color: ['#E4C3BA', '#BCB5C5'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9355'
        },
        {
            name: 'Central Coast',
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            active: false,
            color: ['#E4C3BA', '#BCB5C5'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9364'

        },
        {
            name: "Upstate",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, Brock Berrigan, The Field Tapes",
            id: uuidv4(),
            active: false,
            color: ['#B34727', '#8B533A'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10245"
        }
    ]
}

export default chillHop;