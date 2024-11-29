"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully",
          description: "We'll get back to you soon.",
        })
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        throw new Error('Message submission failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <Textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

