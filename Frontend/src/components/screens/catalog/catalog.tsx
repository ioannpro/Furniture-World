'use client'

import BaseStyle from '@/components/components.module.scss'
import style from '@/components/screens/catalog/catalog.module.scss'
import ItemCard from '@/components/item-card/itemcard'
import Menu from '@/components/menu/menu'
import SortMenu from '@/components/ui/sortMenu'
import { useState } from 'react'

const items = [
    {
        "slug": "cry",
        "name": "cry fffff",
        "image": '/stul1.webp',
        "category": 'Hermes',
        "price": 100.00
    },
    {
        "slug": "cryh",
        "name": "cryh",
        "image": '/stul1.webp',
        "category": 'T',
        "price": 124.20
    },
    {
        "slug": "cryh1",
        "name": "cryh",
        "image": '/stul1.webp',
        "category": 'T',
        "price": 124.20
    }
    ,
    {
        "slug": "cryh2",
        "name": "cryh",
        "image": '/stul1.webp',
        "category": 'T',
        "price": 124.20
    }
]

export default function Catalog() {
    const [isSort, setSort] = useState('Relevance')

    return (
        <>
            <div className={BaseStyle.container}>
                <div className={style.catalog__header}>
                    <h1>All</h1>
                    <SortMenu isSort = {isSort} setSort = {setSort}/>
                </div>
                <div className={style.catalog}>
                    <Menu />
                    <div className={style.catalog__inner}>
                        { items.map( item => (
                            <ItemCard key = {item.slug}
                                slug = {item.slug}
                                name = {item.name} 
                                image = {item.image}
                                category = {item.category}
                                price = {item.price}
                            />))}
                    </div>
                </div>
            </div> 
        </>
    )
}