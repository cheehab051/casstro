"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function FastDiagnosis() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [xrayFile, setXrayFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('message', message)
    if (xrayFile) {
      formData.append('xray', xrayFile)
    }

    try {
      const response = await fetch('/api/fast-diagnosis', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Form submitted successfully",
          description: "We'll get back to you soon with a diagnosis.",
        })
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setXrayFile(null)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="fast-diagnosis" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Fast Diagnosis</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="https://istomatolog.clinic/wp-content/uploads/2020/12/IMG_1060-1024x683.jpg?height=400&width=600" alt="Fast Diagnosis" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="xray">Upload X-ray Image</Label>
                <Input id="xray" type="file" accept="image/*" onChange={(e) => setXrayFile(e.target.files?.[0] || null)} />
              </div>
              <Button type="submit">Submit for Fast Diagnosis</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

