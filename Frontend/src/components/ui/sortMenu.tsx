'use client'

import BaseStyle from '@/components/components.module.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import style from '@/components/ui/sortMenu.module.scss'
import SortToggle from './sortToggle'


export default function SortMenu({isSort, setSort}: any){
    const [isVisible, setVisible] = useState(false)

    const handleVisibility = () => setVisible(!isVisible);

    const setOnClick = (sort: any) => {
        setVisible(!isVisible)
        setSort(sort);
        
    };

    return (
            <div className={style.dropdown}>
                <div className={style.dropdown__title} onClick={handleVisibility}>{isSort}<SortToggle toggle={isVisible}/></div>
                <AnimatePresence>
                    {
                        isVisible && (
                            <motion.div
                                initial = {{height: 0, opacity: 0}}
                                animate = {{height: "auto", opacity: 1}}
                                exit = {{height: 0, opacity: 0}}
                                transition = {{duration: 0.3}}
                                className = {style.dropdown__content}
                            >
                                <div onClick={() => setOnClick('Best Selling')}>Best Selling</div>
                                <div onClick={() => setOnClick('Relevance')}>Relevance</div>
                                <div onClick={() => setOnClick('Price: low to hight')}>Price: low to hight</div>
                                <div onClick={() => setOnClick('Price: hight to low')}>Price: hight to low</div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        )
}