'use client'

import style from '@/components/ui/sortMenu.module.scss'
import { motion } from 'framer-motion'

export default function sortToggle({toggle}: {toggle: boolean})  {
    return (
            <svg className={style.dropdown__icon} viewBox="0 0 17 11" fill="none">
                <motion.g 
                    animate = {toggle ? {rotate: 180}: {}}
                    transition = {{duration: 0.3}}
                >
                    <path d="M1 1L7.63906 9.06172C7.83056 9.29425 8.18268 9.30591 8.38913 9.08655L16 1" stroke-width="1.5" stroke-linecap="round"/>
                </motion.g>  
            </svg>
        )
}