import Link from "next/link"
import style from "@/components/ui/button.module.scss"


export default function Button({children, href}: any) {

    return (
            <Link className={style.btn} href={href}>{children}</Link>
        )
}