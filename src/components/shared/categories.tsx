'use client'
import { FC, JSX } from 'react'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

interface IProps {
	className?: string
}

const cats = [
	{ id: 1, name: 'Пиццы' },
	{ id: 2, name: 'Завтраки' },
	{ id: 3, name: 'Закуски' },
	{ id: 4, name: 'Коктейли' },
	{ id: 5, name: 'Кофе' },
	{ id: 6, name: 'Напитки' },
	{ id: 7, name: 'Десерты' },
]

const Categories: FC<IProps> = ({ className }): JSX.Element => {
	const { activeId } = useCategoryStore()

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{cats.map(category => (
				<a
					key={category.id}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						activeId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary',
					)}
					href={`#${category.name}`}>
					{category.name}
				</a>
			))}
		</div>
	)
}

export default Categories
