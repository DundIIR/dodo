import { FC, JSX } from 'react'
import { cn } from '@/lib/utils'
import { Title } from '../ui/title'
import FilterCheckbox from '../ui/filter/filterCheckbox'
import { Input } from '../ui/input'
import { RangeSlider } from '../ui/filter/rangeSlider'
import FilterCheckboxGroup from '../ui/filter/filterCheckboxGroup'

interface IProps {
	className?: string
}

const Filters: FC<IProps> = ({ className }): JSX.Element => {
	return (
		<div className={cn('my-5', className)}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

			{/* Верхние чекбоксы */}
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />
			</div>

			{/* Фильтрация цены */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
					<Input type="number" min={100} max={5000} placeholder="5000" />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			{/* Нижние чекбоксы */}
			<div className="my-5">
				<FilterCheckboxGroup
					title={'Ингредиенты:'}
					items={[
						{
							text: 'Сырный соус',
							value: '1',
						},
						{
							text: 'Моццарелла',
							value: '2',
						},
						{
							text: 'Чеснок',
							value: '3',
						},
						{
							text: 'Солённые огурчики',
							value: '4',
						},
						{
							text: 'Красный лук',
							value: '5',
						},
						{
							text: 'Томаты',
							value: '6',
						},
						{
							text: 'Сырный соус',
							value: '1',
						},
						{
							text: 'Моццарелла',
							value: '2',
						},
						{
							text: 'Чеснок',
							value: '3',
						},
						{
							text: 'Солённые огурчики',
							value: '4',
						},
						{
							text: 'Красный лук',
							value: '5',
						},
						{
							text: 'Томаты',
							value: '6',
						},
					]}
					defaultItems={[
						{
							text: 'Сырный соус',
							value: '1',
						},
						{
							text: 'Моццарелла',
							value: '2',
						},
						{
							text: 'Чеснок',
							value: '3',
						},
						{
							text: 'Солённые огурчики',
							value: '4',
						},
						{
							text: 'Томаты',
							value: '6',
						},
					]}
				/>
			</div>
		</div>
	)
}

export default Filters
