import Item from "@/components/screens/item/item" 
import { Metadata } from "next"


export default function ItemPage({ params }: { params: { slug: string } }) {


    return (
        <Item slug = { params.slug } />
    )
}