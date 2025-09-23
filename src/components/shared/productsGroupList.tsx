'use client'

import { FC, JSX, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Title } from '../ui/title'
import ProductCard from './productCard'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface IProps {
	title: string
	products: any[]
	categoryId: number
	className?: string
	listClassName?: string
}

const ProductsGroupList: FC<IProps> = ({
	title,
	products,
	categoryId,
	className,
	listClassName,
}): JSX.Element => {
	const { setActiveId } = useCategoryStore()

	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, { threshold: 0.4 })

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveId(categoryId)
		}
	}, [categoryId, intersection, title])

	return (
		<div
			className={cn('', className)}
			id={title}
			ref={intersectionRef}
			style={{ scrollMarginTop: '100px' }}>
			<Title text={title} size={'lg'} className="font-extrabold mb-5" />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						name={product.name}
						price={product.variant[0].price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductsGroupList
