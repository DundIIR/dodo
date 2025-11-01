import { Container } from '@/components/shared/container'
import React from 'react'

export const metadata = {
  title: 'О нас — DoDo & Next.js',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container className="py-20">
        <h1 className="text-3xl font-bold mb-6">О компании</h1>
        <div className="prose">
          <p>
            DoDo & Next.js — демонстрационный проект пиццерии. Наша миссия — приносить
            радость от вкусной пиццы при помощи современных веб‑технологий. Мы стремимся
            сочетать удобный интерфейс и быстрый процесс заказа, чтобы вы получили заказ
            как можно быстрее.
          </p>

          <p>
            В проекте использованы Next.js, TypeScript и Tailwind CSS. Это учебный проект,
            который показывает пример интеграции front‑end и back‑end логики для
            интернет-магазина пиццы.
          </p>
        </div>
      </Container>
    </main>
  )
}
