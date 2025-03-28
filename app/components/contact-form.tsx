"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
    const [pending, setPending] = useState(false)
    const [message, setMessage] = useState("")

    async function handleSubmit(formData: FormData) {
        setPending(true)
        try {
            const response = await submitContactForm(formData)
            setMessage(response.message)
        } catch (error) {
            setMessage("Something went wrong. Please try again.")
        } finally {
            setPending(false)
        }
    }

    return (
        <Card className="p-6 bg-[#112240] border-[#233554]">
            <form action={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#ccd6f6]">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        required
                        className="bg-[#0a192f] border-[#233554] text-[#ccd6f6] focus-visible:ring-[#64ffda]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#ccd6f6]">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-[#0a192f] border-[#233554] text-[#ccd6f6] focus-visible:ring-[#64ffda]"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#ccd6f6]">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        required
                        className="bg-[#0a192f] border-[#233554] text-[#ccd6f6] focus-visible:ring-[#64ffda]"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                    disabled={pending}
                >
                    {pending ? "Sending..." : "Send Message"}
                </Button>
                {message && <p className="text-sm text-center mt-4 text-[#8892b0]">{message}</p>}
            </form>
        </Card>
    )
}

