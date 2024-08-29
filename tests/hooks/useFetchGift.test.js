import { fireEvent, renderHook, waitFor } from "@testing-library/react";
import { useFetchGift } from "../../src/hooks/useFetchGift";

describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe de regresar el estado inicial', () => {
        const {result} =renderHook(()=>(useFetchGift('One Punch')))
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const {result} =renderHook(()=>(useFetchGift('One Punch')))
        await waitFor(()=>(
            expect(result.current.images.length).toBeGreaterThan(0)
        ));
        const {images,isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
    

 })