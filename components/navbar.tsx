"use client"

import * as React from "react"
import Link from "next/link"
import {Info, ShieldHalf, Brain, Ear, Dices, MessageSquareQuote, PenTool} from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";

export function NavBar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList className="text-lg">
                <NavigationMenuItem>
                    <Button variant="outline">
                        <NavigationMenuTrigger className="bg-none">
                            Devenir Bénévole
                        </NavigationMenuTrigger>
                    </Button>
                    <NavigationMenuContent>
                        <ul className="grid w-[230px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <Info />
                                        Guide
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <ShieldHalf />
                                        Modérateur.trice
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <Brain />
                                        Psychologue
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <Ear />
                                        Bénévole Écoutant.e
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <Dices />
                                        Animateur.trice
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <MessageSquareQuote />
                                        Chargé.e de Communication
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <PenTool />
                                        Graphiste
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Dialog>
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <DialogTrigger asChild>
                                    <Button variant="ghost" className="text-lg cursor-pointer">Nous contacter</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Nous contacter</DialogTitle>
                                        <DialogDescription>
                                            Ce formulaire de contact n'est pas destiné aux demandes d'écoutes. Pour cela, merci de nous contacter via Discord.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Nom</Label>
                                            <Input id="name" name="Nom" type="text" placeholder="Nom/Pseudo" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="Email" type="email" placeholder="Adresse courriel" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" name="MEssage" placeholder="Message" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Annuler</Button>
                                        </DialogClose>
                                        <Button type="submit">Envoyer</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Button variant="secondary" asChild>
                            <Link href="/docs" className="text-lg">Faire un don</Link>
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
