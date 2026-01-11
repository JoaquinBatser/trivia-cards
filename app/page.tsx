"use client"

import * as React from "react"
import { VolonkyCard } from "@/components/volonky-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cards } from "@/data/cards"
import type { Card as CardType, CardType as CardTypeType } from "@/data/cards"
import { ShuffleIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Page() {
  const [currentCard, setCurrentCard] = React.useState<CardType | null>(null)
  const [hasStarted, setHasStarted] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<CardTypeType | 'todos'>('todos')

  const typeOptions: { value: CardTypeType | 'todos'; label: string }[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'trivia', label: 'Trivia' },
    { value: 'dibujando', label: 'Dibujando' },
    { value: 'mimica', label: 'Mímica' },
    { value: 'tabu', label: 'Tabú' },
    { value: 'indicios', label: 'Indicios' },
  ]

  const getFilteredCards = () => {
    if (selectedType === 'todos') {
      return cards
    }
    return cards.filter(card => card.type === selectedType)
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
      <div className="md:hidden p-4 border-b border-border bg-muted/20">
        <h1 className="text-2xl font-bold tracking-tight">Volonky</h1>
      </div>

      {/* Layout principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar izquierdo - Solo en desktop */}
        <div className="hidden md:flex w-80 border-r border-border flex-col bg-muted/20">
          <div className="p-6 border-b border-border">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Volonky</h1>
            <p className="text-sm text-muted-foreground">
              Juego de tarjetas
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
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

              <div className="pt-6 border-t border-border mt-6">
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-background z-50">
        <div className="p-2">
          <div className="grid grid-cols-3 gap-1 mb-2">
            {typeOptions.slice(0, 3).map((option) => (
              <Button
                key={option.value}
                variant={selectedType === option.value ? 'default' : 'ghost'}
                size="sm"
                onClick={() => {
                  setSelectedType(option.value)
                  setCurrentCard(null)
                  setHasStarted(false)
                }}
                className={cn(
                  "text-xs",
                  selectedType === option.value && "font-semibold"
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {typeOptions.slice(3).map((option) => (
              <Button
                key={option.value}
                variant={selectedType === option.value ? 'default' : 'ghost'}
                size="sm"
                onClick={() => {
                  setSelectedType(option.value)
                  setCurrentCard(null)
                  setHasStarted(false)
                }}
                className={cn(
                  "text-xs",
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
