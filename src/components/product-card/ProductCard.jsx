import css from './ProductCard.module.css'
import addToFavouriteIcon from '../../assets/add-to-favourite.svg'
import favouritedIcon from '../../assets/favourite.svg'

const ProductCard = (props) => {
	const {name, price, image, isFavourited} = props
	return (
		<div className={css.cardWrapper}>
			<div className={css.imageWrapper}>
				<div className={css.favourite}>
					<img src={isFavourited ? favouritedIcon : addToFavouriteIcon} alt='' />
				</div>
				<img className={css.image} src={image} alt={name} />
			</div>
			<p className={css.name}>{name}</p>
			<p className={css.price}>{price},00 руб.</p>
			<button className={css.button}>Добавить в корзину</button>
		</div>
	)
}

export default ProductCard