import { Container } from '@/components/shared/container'
import Filters from '@/components/shared/filters'
import ProductCard from '@/components/shared/productCard'
import ProductsGroupList from '@/components/shared/productsGroupList'
import TopBar from '@/components/shared/topBar'
import { Title } from '@/components/ui/title'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<Container>
				<div className="flex gap-[60px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* Список товаров */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Пиццы"
								products={[
									{
										id: 1,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 2,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 3,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 4,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 5,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 6,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 7,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 8,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title="Завтраки"
								products={[
									{
										id: 1,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 2,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 3,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
									{
										id: 4,
										name: 'Пепперони фреш',
										variant: [{ price: 189 }],
										imageUrl:
											'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
			<div className="h-[2200px]"></div>
		</>
	)
}
