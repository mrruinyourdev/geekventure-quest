import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock, Check } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const tour = {
    title: "Worlds Championship Finals",
    date: "Nov 2-5, 2025",
    price: 3299,
    nights: 3,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((step + 1) as 1 | 2 | 3);
    } else {
      // Simulate successful booking
      navigate("/confirmation");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-12 px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Your <span className="text-primary">Booking</span>
          </h1>
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`h-2 w-16 rounded-full ${
                    s <= step ? "bg-primary" : "bg-muted"
                  } transition-colors`}
                />
                {s < 3 && <div className="w-2" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {step}
                  </div>
                  {step === 1 && "Traveller Details"}
                  {step === 2 && "Payment Information"}
                  {step === 3 && "Confirmation"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input id="guests" type="number" min="1" max="10" defaultValue="1" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Requests (Optional)</Label>
                        <textarea
                          id="notes"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Lock className="h-4 w-4" />
                        <span>Your payment information is secure and encrypted</span>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input id="cardName" placeholder="John Doe" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                            <CreditCard className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" maxLength={4} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="billingAddress">Billing Address</Label>
                        <Input id="billingAddress" placeholder="123 Main St, City, Country" required />
                      </div>

                      <div className="pt-4">
                        <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/10 border border-primary/20">
                          <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium text-primary mb-1">Secure Payment Processing</p>
                            <p className="text-muted-foreground">
                              This is a demo checkout. No actual payment will be processed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 text-center py-8">
                      <div className="mx-auto h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="h-8 w-8 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                        <p className="text-muted-foreground">
                          Your tour has been successfully booked. We've sent a confirmation email to your inbox.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-card border border-border text-left space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Booking ID:</span>
                          <span className="font-mono font-semibold">GV-{Math.floor(Math.random() * 100000)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tour:</span>
                          <span className="font-medium">{tour.title}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">{tour.date}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div className="flex gap-4">
                    {step > 1 && step < 3 && (
                      <Button type="button" variant="outline" onClick={() => setStep((step - 1) as 1 | 2)} className="flex-1">
                        Back
                      </Button>
                    )}
                    <Button type="submit" variant="hero" className="flex-1">
                      {step === 3 ? "View My Bookings" : step === 2 ? "Confirm & Pay" : "Continue"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <Card className="border-primary/50 bg-card/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground">{tour.date}</p>
                  <Badge variant="outline" className="mt-2">
                    {tour.nights} Nights
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tour Price (1 guest)</span>
                    <span>${tour.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span>$99</span>
                  </div>
                  <div className="flex justify-between text-accent">
                    <span>Early Bird Discount</span>
                    <span>-$200</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${(tour.price + 99 - 200).toLocaleString()}</span>
                </div>

                <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    Free cancellation up to 30 days
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    Instant booking confirmation
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    24/7 customer support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
