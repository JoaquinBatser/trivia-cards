"use client"

import * as React from "react"
import { VolonkyCard } from "@/components/volonky-card"
import { Button } from "@/components/ui/button"
import { cineMudoCards } from "@/data/cine-mudo-cards"
import type { MimicaCard } from "@/data/cards"
import { ShuffleIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function CineMudoPage() {
    const [currentCard, setCurrentCard] = React.useState<MimicaCard | null>(null)
    const [hasStarted, setHasStarted] = React.useState(false)

    const getRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cineMudoCards.length)
        setCurrentCard(cineMudoCards[randomIndex])
        setHasStarted(true)
    }

    return (
        <div className="h-screen bg-background flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-border bg-muted/20 flex items-center justify-between">
                <Link href="/">
                    <Button variant="ghost" size="sm">
                        <ArrowLeftIcon className="mr-2 size-4" />
                        Volver
                    </Button>
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Cine Mudo</h1>
                <div className="w-20" /> {/* Spacer para centrar */}
            </div>

            {/* Contenido principal */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
                <div className="w-full max-w-3xl">
                    {!hasStarted ? (
                        <div className="flex flex-col items-center justify-center py-20 space-y-6">
                            <p className="text-lg md:text-xl text-muted-foreground text-center">
                                Mímica sobre películas y series
                            </p>
                            <p className="text-sm text-muted-foreground text-center">
                                Presiona el botón para obtener tu primera tarjeta
                            </p>
                            <Button
                                size="lg"
                                onClick={getRandomCard}
                                className="text-lg px-8"
                            >
                                <ShuffleIcon className="mr-2 size-5" />
                                Obtener Tarjeta
                            </Button>
                        </div>
                    ) : currentCard ? (
                        <div className="space-y-4">
                            <VolonkyCard card={currentCard} />
                            <div className="flex justify-center pb-4">
                                <Button
                                    size="lg"
                                    onClick={getRandomCard}
                                    className="text-lg px-8 w-full max-w-xs"
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
    )
}

