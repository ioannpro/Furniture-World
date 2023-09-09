import BaseStyle from '@/components/components.module.scss'
import style from './header.module.scss'

export default function Header() {
    return (
        <div className={BaseStyle.container}>
            <div className={style.header}>
                Logo
            </div>
        </div>
    )
}