"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Card as CardType } from "@/data/cards"
import { cn } from "@/lib/utils"

interface VolonkyCardProps {
    card: CardType
    className?: string
}

const typeLabels: Record<CardType['type'], string> = {
    trivia: 'Trivia',
    dibujando: 'Dibujando',
    mimica: 'Mímica',
    tabu: 'Tabú',
    indicios: 'Indicios',
}

const typeColors: Record<CardType['type'], string> = {
    trivia: 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300',
    dibujando: 'bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300',
    mimica: 'bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300',
    tabu: 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-300',
    indicios: 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-300',
}

export function VolonkyCard({ card, className }: VolonkyCardProps) {
    return (
        <Card className={cn("w-full shadow-lg", className)}>
            <CardHeader className="border-b bg-muted/30">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold tracking-wide">
                        {typeLabels[card.type]}
                    </CardTitle>
                    <Badge className={cn(typeColors[card.type], "font-mono text-xs uppercase")}>
                        {card.type}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                {card.type === 'trivia' && (
                    <div className="space-y-6">
                        <div className="py-2">
                            <p className="text-lg font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                                Pregunta
                            </p>
                            <p className="text-2xl leading-relaxed">{card.question}</p>
                        </div>
                        <div className="pt-6 border-t-2">
                            <p className="text-lg font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                                Respuesta
                            </p>
                            <div className="bg-muted/50 rounded-lg p-4 border border-border">
                                <p className="text-2xl font-bold">{card.answer}</p>
                            </div>
                        </div>
                    </div>
                )}

                {card.type === 'dibujando' && (
                    <div className="text-center space-y-6 py-4">
                        <p className="text-muted-foreground text-lg font-medium uppercase tracking-wider">
                            Dibuja
                        </p>
                        <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 bg-muted/20">
                            <p className="text-5xl font-bold tracking-wide">{card.word}</p>
                        </div>
                    </div>
                )}

                {card.type === 'mimica' && (
                    <div className="text-center space-y-6 py-4">
                        <p className="text-muted-foreground text-lg font-medium uppercase tracking-wider">
                            Haz mímica de
                        </p>
                        <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 bg-muted/20">
                            <p className="text-5xl font-bold tracking-wide">{card.word}</p>
                        </div>
                    </div>
                )}

                {card.type === 'tabu' && (
                    <div className="space-y-8">
                        <div className="text-center py-4">
                            <p className="text-muted-foreground text-lg mb-6 font-medium uppercase tracking-wider">
                                Di la palabra
                            </p>
                            <div className="border-2 border-primary/20 rounded-lg p-8 bg-primary/5">
                                <p className="text-5xl font-bold tracking-wide">{card.word}</p>
                            </div>
                        </div>
                        <div className="pt-6 border-t-2">
                            <p className="text-lg font-medium text-muted-foreground mb-6 text-center uppercase tracking-wider">
                                Sin mencionar
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {card.forbidden.map((word, index) => (
                                    <Badge
                                        key={index}
                                        variant="destructive"
                                        className="text-base px-4 py-2 font-semibold"
                                    >
                                        {word}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {card.type === 'indicios' && (
                    <div className="space-y-8">
                        <div className="text-center pb-6 border-b-2">
                            <p className="text-muted-foreground text-lg mb-4 font-medium uppercase tracking-wider">
                                Adivina
                            </p>
                            <div className="bg-muted/30 rounded-lg p-6 border-2 border-dashed border-muted-foreground/20">
                                <p className="text-2xl font-bold opacity-0 select-none">
                                    {card.answer}
                                </p>
                                <p className="text-sm text-muted-foreground mt-4 italic">
                                    Respuesta oculta — muéstrala cuando adivinen
                                </p>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
                                Indicios
                            </p>
                            <div className="space-y-4">
                                {card.hints.map((hint, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "p-5 rounded-lg border-2 transition-all",
                                            index === 0 && "bg-muted/30 border-muted-foreground/10",
                                            index === 1 && "bg-muted/50 border-muted-foreground/20",
                                            index === 2 && "bg-primary/10 border-primary/30"
                                        )}
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/15 flex items-center justify-center text-sm font-bold border-2 border-foreground/10">
                                                {index + 1}
                                            </span>
                                            <p className="text-lg flex-1 leading-relaxed">{hint}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-6 border-t-2">
                            <details className="group">
                                <summary className="text-base text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer list-none select-none">
                                    <span className="flex items-center gap-2">
                                        <span className="transition-transform group-open:rotate-90">▶</span>
                                        Mostrar respuesta
                                    </span>
                                </summary>
                                <div className="mt-4 bg-primary/10 rounded-lg p-4 border border-primary/20">
                                    <p className="text-2xl font-bold">{card.answer}</p>
                                </div>
                            </details>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

