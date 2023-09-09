import Catalog from '@/components/screens/catalog/catalog'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Catalog',
    description: 'Catalog',
}

export default function CatalogPage() {
    return (
        <Catalog />
    )
}