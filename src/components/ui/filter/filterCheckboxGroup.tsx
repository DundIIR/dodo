'use client'

import { FC, JSX, useState } from 'react'
import { cn } from '@/lib/utils'
import FilterCheckbox, { IFilterCheckbox } from './filterCheckbox'
import { Input } from '../input'

type Item = IFilterCheckbox

interface IProps {
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

const FilterCheckboxGroup: FC<IProps> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	onChange,
	defaultValue,
	className,
}): JSX.Element => {
	const [showAll, setShowAll] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState('')

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = !showAll
		? defaultItems.slice(0, limit)
		: items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))

	return (
		<div className={cn('', className)}>
			<p className="font-bold mb-3">{title}</p>
			{showAll && (
				<div className="mb-5">
					<Input
						placeholder={searchInputPlaceholder}
						value={searchValue}
						onChange={onChangeSearch}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={false}
						onCheckedChange={() => onChange?.([item.text])}
					/>
				))}

				{items.length > limit && (
					<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
						<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
							{showAll ? 'Скрыть' : '+ Показать все'}
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FilterCheckboxGroup
