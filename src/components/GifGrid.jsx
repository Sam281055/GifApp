import { useFetchGift } from "../hooks/useFetchGift";
import {GifItem} from "./index";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGift(category);

    return (
        <>
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            <h3>{category}</h3>

            <div className="card-grid">
                {images.map((imag) => {
                    return (
                        <GifItem key={imag.id} {...imag} />
                    )
                })}
            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}