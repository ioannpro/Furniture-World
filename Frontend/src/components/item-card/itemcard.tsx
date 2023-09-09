import Image from 'next/image'
import style from '@/components/item-card/itemcard.module.scss'
import { open_sans } from '../fonts'
import Button from '../ui/button'

export default function ItemCard({ name, slug, image, category, price } : { name: string, slug: string, image: string, category: string, price: number }) {
    return (
        <div className={`${style.item}`}>
            <div className={style.item__img}>
                <Image
                    src= { image } 
                    alt={ name }
                    fill={true}
                />
            </div>
            <div className={style.item__category}>{ category }</div>
            <div className={style.item__title}>{ name }</div>
            <div className={style.item__price}>
                { new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD'
                }).format(price) }
            </div>
            <Button href={`/item/${slug}`}>Buy</Button>
        </div>
    )
}