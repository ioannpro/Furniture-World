import style from '@/components/screens/item/item.module.scss'
import BaseStyle from '@/components/components.module.scss'


export default function Item({slug}: {slug: string}) {

    return (
        <div className={BaseStyle.container}>
            <div className={style.item}>
                <div className={style.item__img}>

                </div>
                <div className={style.item__information}>
                    
                </div>
            </div>
        </div>
    )
}