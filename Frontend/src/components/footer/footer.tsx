import BaseStyle from '@/components/components.module.scss'
import style from './footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={BaseStyle.container}>
            <div className={style.footer}>
                <div className={style.footer__inner}>
                    <div className={style.footer__menu}>
                        <h1 className={style.footer__inner__title}>
                            Menu
                        </h1>
                        <div className={style.footer__menu__inner}>
                            <div>
                                <Link href={'/catalog'}>Catalog</Link>
                                <Link href={'/about'}>About</Link>
                            </div>
                            <div><Link href={'/'}>Nnn</Link></div>
                        </div>
                    </div>
                    <div className={style.footer__contacts}>
                        <h1 className={style.footer__inner__title}>
                            Contacts
                        </h1>
                    </div>
                </div>
                <div className={style.footer__right}>
                    © 2023 All rights reserved. Design & Create by <Link className = {style.footer__author} href={'https://github.com/ioannpro'}>Prokurat I.</Link>, <Link className = {style.footer__author} href={'https://github.com/Stop2234'}>Dvoitsov E.</Link>
                </div>
            </div>
        </div>
    )
}