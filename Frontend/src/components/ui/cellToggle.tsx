'use client'

import style from '@/components/ui/cell.module.scss'
import { motion } from 'framer-motion'

export default function cellToggle({toggle}: {toggle: boolean})  {
    return (
            <motion.div>
                <svg className={style.cell__icon} viewBox="0 0 23 22" fill="none">                    
                    <motion.g 
                        // initial = {toggle ? {rotate: 10}: {}}
                        // animate = {toggle ? {rotate: 10}: {}}
                        // exit = {{rotate: 0}}
                    >
                        <path d="M1.5 11L21.5 11" stroke-width="2" stroke-linecap="round"/>
                    </motion.g>
                    <motion.g animate = {toggle ? {rotate: 90}: {}}>
                        <path d="M11.5 1L11.5 21" stroke-width="2" stroke-linecap="round"/>
                    </motion.g>                    
                </svg>
            </motion.div>
        )
}