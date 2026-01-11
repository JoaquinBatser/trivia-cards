"use client"

import * as React from "react"
import { VolonkyCard } from "@/components/volonky-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cards } from "@/data/cards"
import type { Card as CardType, CardType as CardTypeType, CardLevel } from "@/data/cards"
import { ShuffleIcon, FilmIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Page() {
  const [currentCard, setCurrentCard] = React.useState<CardType | null>(null)
  const [hasStarted, setHasStarted] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<CardTypeType | 'todos'>('todos')
  const [selectedLevel, setSelectedLevel] = React.useState<CardLevel>('facil')

  const typeOptions: { value: CardTypeType | 'todos'; label: string }[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'trivia', label: 'Trivia' },
    { value: 'dibujando', label: 'Dibujando' },
    { value: 'mimica', label: 'Mímica' },
    { value: 'tabu', label: 'Tabú' },
    { value: 'indicios', label: 'Indicios' },
  ]

  const getFilteredCards = () => {
    let filtered = cards.filter(card => card.level === selectedLevel)

    if (selectedType !== 'todos') {
      filtered = filtered.filter(card => card.type === selectedType)
    }

    return filtered
  }

  const getRandomCard = () => {
    const filteredCards = getFilteredCards()
    if (filteredCards.length === 0) return

    const randomIndex = Math.floor(Math.random() * filteredCards.length)
    setCurrentCard(filteredCards[randomIndex])
    setHasStarted(true)
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header - Solo en mobile */}
      <div className="md:hidden p-4 border-b border-border bg-muted/20 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Volonky</h1>
        <Link href="/cine-mudo">
          <Button variant="outline" size="sm">
            <FilmIcon className="mr-2 size-4" />
            Cine Mudo
          </Button>
        </Link>
      </div>

      {/* Layout principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar izquierdo - Solo en desktop */}
        <div className="hidden md:flex w-80 border-r border-border flex-col bg-muted/20">
          <div className="p-6 border-b border-border">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Volonky</h1>
            <p className="text-sm text-muted-foreground mb-4">
              Juego de tarjetas
            </p>
            <Link href="/cine-mudo">
              <Button variant="outline" className="w-full">
                <FilmIcon className="mr-2 size-4" />
                Cine Mudo
              </Button>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Selector de Nivel */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Nivel
                </p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant={selectedLevel === 'facil' ? 'default' : 'outline'}
                    size="default"
                    onClick={() => {
                      setSelectedLevel('facil')
                      setCurrentCard(null)
                      setHasStarted(false)
                    }}
                    className={cn(
                      "w-full justify-start text-sm",
                      selectedLevel === 'facil' && "font-semibold"
                    )}
                  >
                    Fácil
                  </Button>
                  <Button
                    variant={selectedLevel === 'medio' ? 'default' : 'outline'}
                    size="default"
                    onClick={() => {
                      setSelectedLevel('medio')
                      setCurrentCard(null)
                      setHasStarted(false)
                    }}
                    className={cn(
                      "w-full justify-start text-sm",
                      selectedLevel === 'medio' && "font-semibold"
                    )}
                  >
                    Medio
                  </Button>
                  <Button
                    variant={selectedLevel === 'dificil' ? 'default' : 'outline'}
                    size="default"
                    onClick={() => {
                      setSelectedLevel('dificil')
                      setCurrentCard(null)
                      setHasStarted(false)
                    }}
                    className={cn(
                      "w-full justify-start text-sm",
                      selectedLevel === 'dificil' && "font-semibold"
                    )}
                  >
                    Difícil
                  </Button>
                </div>
              </div>

              {/* Selector de Tipo */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Tipo de tarjeta
                </p>
                <div className="flex flex-col gap-2">
                  {typeOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedType === option.value ? 'default' : 'outline'}
                      size="default"
                      onClick={() => {
                        setSelectedType(option.value)
                        setCurrentCard(null)
                        setHasStarted(false)
                      }}
                      className={cn(
                        "w-full justify-start text-sm",
                        selectedType === option.value && "font-semibold"
                      )}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  size="lg"
                  onClick={getRandomCard}
                  className="w-full"
                  disabled={getFilteredCards().length === 0}
                >
                  <ShuffleIcon className="mr-2 size-5" />
                  {!hasStarted ? 'Obtener Tarjeta' : 'Siguiente Tarjeta'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal - tarjeta */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-y-auto pb-20 md:pb-8">
          <div className="w-full max-w-3xl">
            {!hasStarted ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                  Selecciona un tipo y presiona el botón para obtener tu primera tarjeta
                </p>
                {/* Botón para obtener tarjeta - Solo en mobile cuando no ha empezado */}
                <div className="md:hidden">
                  <Button
                    size="lg"
                    onClick={getRandomCard}
                    disabled={getFilteredCards().length === 0}
                  >
                    <ShuffleIcon className="mr-2 size-5" />
                    Obtener Tarjeta
                  </Button>
                </div>
              </div>
            ) : currentCard ? (
              <div className="space-y-4">
                <VolonkyCard card={currentCard} />
                {/* Botón siguiente - Solo en mobile */}
                <div className="md:hidden flex justify-center pb-4">
                  <Button
                    size="lg"
                    onClick={getRandomCard}
                    className="w-full max-w-xs"
                  >
                    <ShuffleIcon className="mr-2 size-5" />
                    Siguiente Tarjeta
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Tabbar inferior - Solo en mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="p-3 space-y-3">
          {/* Selector de Nivel - Scrollable horizontal */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {(['facil', 'medio', 'dificil'] as CardLevel[]).map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedLevel(level)
                  setCurrentCard(null)
                  setHasStarted(false)
                }}
                className={cn(
                  "text-xs whitespace-nowrap px-4",
                  selectedLevel === level && "font-semibold"
                )}
              >
                {level === 'facil' ? 'Fácil' : level === 'medio' ? 'Medio' : 'Difícil'}
              </Button>
            ))}
          </div>

          {/* Selector de Tipo - Scrollable horizontal */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {typeOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedType === option.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedType(option.value)
                  setCurrentCard(null)
                  setHasStarted(false)
                }}
                className={cn(
                  "text-xs whitespace-nowrap px-3",
                  selectedType === option.value && "font-semibold"
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
