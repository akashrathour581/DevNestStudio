"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const projectTypes = [
  { value: "website", label: "Website", basePrice: 2500, multiplier: 1 },
  { value: "ecommerce", label: "E-commerce", basePrice: 5000, multiplier: 1.2 },
  { value: "ai-agent", label: "AI Agent", basePrice: 8000, multiplier: 1.5 },
  { value: "dashboard", label: "Dashboard", basePrice: 6000, multiplier: 1.1 },
  { value: "mobile-app", label: "Mobile App", basePrice: 10000, multiplier: 1.3 },
  { value: "api", label: "API Development", basePrice: 4000, multiplier: 0.9 },
]

const complexityLevels = [
  { value: "1", label: "Simple", multiplier: 0.8 },
  { value: "2", label: "Standard", multiplier: 1 },
  { value: "3", label: "Complex", multiplier: 1.4 },
  { value: "4", label: "Advanced", multiplier: 1.8 },
  { value: "5", label: "Enterprise", multiplier: 2.5 },
]

const featureCounts = [
  { value: "1", label: "1-3 Features", multiplier: 0.9 },
  { value: "2", label: "4-6 Features", multiplier: 1 },
  { value: "3", label: "7-10 Features", multiplier: 1.3 },
  { value: "4", label: "11-15 Features", multiplier: 1.7 },
  { value: "5", label: "15+ Features", multiplier: 2.2 },
]

export default function CostCalculatorPage() {
  const [projectType, setProjectType] = useState("website")
  const [complexity, setComplexity] = useState("2")
  const [features, setFeatures] = useState("2")

  const selected = projectTypes.find((p) => p.value === projectType) || projectTypes[0]
  const comp = complexityLevels.find((c) => c.value === complexity) || complexityLevels[1]
  const feat = featureCounts.find((f) => f.value === features) || featureCounts[1]

  const baseEstimate = selected.basePrice * selected.multiplier * comp.multiplier * feat.multiplier
  const minEstimate = Math.round(baseEstimate * 0.85)
  const maxEstimate = Math.round(baseEstimate * 1.15)
  const timelineMin = Math.round(parseInt(complexity) * 2 + parseInt(features) * 1.5)
  const timelineMax = Math.round(parseInt(complexity) * 3 + parseInt(features) * 2.5)

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Cost Calculator</h1>
          <p className="text-muted-foreground text-lg">Get an instant estimate for your project.</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-8">
            <div>
              <Label className="mb-2 block">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Complexity</Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {complexityLevels.map((c) => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Features</Label>
              <Select value={features} onValueChange={setFeatures}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {featureCounts.map((f) => (
                    <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="bg-muted rounded-xl p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Estimated Range</div>
              <div className="text-3xl font-bold">
                ${minEstimate.toLocaleString()} - ${maxEstimate.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Timeline: {timelineMin} - {timelineMax} weeks
              </div>
            </div>

            <Link href="/free-consultation">
              <Button className="w-full rounded-full">Get Detailed Quote</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
