'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import style from '@/components/ui/cell.module.scss'
import CellToggle from '@/components/ui/cellToggle'


export default function Cell({children, title}: {children: any, title: string}) {
    const [isVisible, setVisible] = useState(false)

    const handleVisibility = () => setVisible(!isVisible);

    return (
            <div className={style.cell}>
                <div onClick={handleVisibility} className={style.cell__title}>
                    <div>{title}</div>
                    <CellToggle toggle={isVisible} />
                </div>
                
                <AnimatePresence>
                    {
                        isVisible && (
                            <motion.div
                                initial = {{height: 0, opacity: 0}}
                                animate = {{height: "auto", opacity: 1}}
                                exit = {{height: 0, opacity: 0}}
                                transition = {{duration: 0.4}}
                                style = {{overflow: 'hidden'}}
                            >
                                <div className={style.cell__children}>
                                    {children}
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        )
}