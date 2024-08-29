import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGift } from "../../src/hooks/useFetchGift";

jest.mock('../../src/hooks/useFetchGift');

describe('Testeos en <GifGird/>', () => {
    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGift.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes ', () => {

        const gifs = [{
            id:'123',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },{
            id:'234',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }]
        useFetchGift.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});
