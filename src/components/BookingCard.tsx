import { useState, useMemo } from "react";
import { CalendarIcon, Clock, MapPin, Car, Send, MessageSquare, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { sendWhatsApp, getDistance } from "@/lib/whatsapp";
import locations from "@/data/locations.json";
import vehicles from "@/data/vehicles.json";

const BookingCard = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [ampm, setAmpm] = useState("AM");
  const [vehicle, setVehicle] = useState("");
  const [tripPlan, setTripPlan] = useState("");
  const [customRequest, setCustomRequest] = useState("");
  const [uberPickup, setUberPickup] = useState("");
  const [uberDrop, setUberDrop] = useState("");
  const [uberVehicle, setUberVehicle] = useState("");

  const estimatedPrice = useMemo(() => {
    if (!pickup || !drop || !vehicle) return null;
    const p = locations.find((l) => l.name === pickup);
    const d = locations.find((l) => l.name === drop);
    const v = vehicles.find((ve) => ve.type === vehicle);
    if (!p || !d || !v) return null;
    const dist = getDistance(p.lat, p.lng, d.lat, d.lng);
    return { distance: dist, total: dist * v.pricePerKm };
  }, [pickup, drop, vehicle]);

  const uberPrice = useMemo(() => {
    if (!uberPickup || !uberDrop || !uberVehicle) return null;
    const p = locations.find((l) => l.name === uberPickup);
    const d = locations.find((l) => l.name === uberDrop);
    const v = vehicles.find((ve) => ve.type === uberVehicle);
    if (!p || !d || !v) return null;
    const dist = getDistance(p.lat, p.lng, d.lat, d.lng);
    return { distance: dist, total: dist * v.pricePerKm };
  }, [uberPickup, uberDrop, uberVehicle]);

  const handleBookRide = () => {
    if (!pickup || !drop || !date || !time || !vehicle) return;
    const msg = `Hello SL Go Travel,\nI would like to book a ride.\n\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${format(date, "PPP")}\nTime: ${time} ${ampm}\nVehicle: ${vehicle}\nEstimated Price: LKR ${estimatedPrice?.total?.toLocaleString() ?? "N/A"}`;
    sendWhatsApp(msg);
  };

  const handleTripPlan = () => {
    if (!tripPlan) return;
    sendWhatsApp(`Hello SL Go Travel,\nI would like to plan a trip.\n\n${tripPlan}`);
  };

  const handleCustomRequest = () => {
    if (!customRequest) return;
    sendWhatsApp(`Hello SL Go Travel,\nCustom Request:\n\n${customRequest}`);
  };

  const handleUberBook = () => {
    if (!uberPickup || !uberDrop || !uberVehicle) return;
    const p = locations.find((l) => l.name === uberPickup);
    const d = locations.find((l) => l.name === uberDrop);
    const msg = `Hello SL Go Travel,\nI would like to book a ride now.\n\nPickup: ${uberPickup} (${p?.lat}, ${p?.lng})\nDrop: ${uberDrop} (${d?.lat}, ${d?.lng})\nVehicle: ${uberVehicle}\nEstimated Price: LKR ${uberPrice?.total?.toLocaleString() ?? "N/A"}`;
    sendWhatsApp(msg);
  };

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));

  return (
    <div className="glass-card p-4 md:p-6 w-full max-w-md">
      <Tabs defaultValue="ride" className="w-full">
        <TabsList className="grid grid-cols-4 w-full bg-muted/50 mb-4">
          <TabsTrigger value="ride" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Book Ride</TabsTrigger>
          <TabsTrigger value="trip" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Trip</TabsTrigger>
          <TabsTrigger value="request" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Request</TabsTrigger>
          <TabsTrigger value="booknow" className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Book Now</TabsTrigger>
        </TabsList>

        {/* BOOK RIDE */}
        <TabsContent value="ride" className="space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Pickup
            </label>
            <Select value={pickup} onValueChange={setPickup}>
              <SelectTrigger><SelectValue placeholder="Select pickup" /></SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Navigation className="w-3 h-3" /> Drop
            </label>
            <Select value={drop} onValueChange={setDrop}>
              <SelectTrigger><SelectValue placeholder="Select destination" /></SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" /> Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal text-sm", !date && "text-muted-foreground")}>
                    {date ? format(date, "MMM dd") : "Pick date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="p-3 pointer-events-auto" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> Time
              </label>
              <div className="flex gap-1">
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="text-sm"><SelectValue placeholder="Hour" /></SelectTrigger>
                  <SelectContent>
                    {hours.map((h) => (
                      <SelectItem key={h} value={h}>{h}:00</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={ampm} onValueChange={setAmpm}>
                  <SelectTrigger className="w-16 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Car className="w-3 h-3" /> Vehicle
            </label>
            <Select value={vehicle} onValueChange={setVehicle}>
              <SelectTrigger><SelectValue placeholder="Select vehicle" /></SelectTrigger>
              <SelectContent>
                {vehicles.map((v) => (
                  <SelectItem key={v.type} value={v.type}>
                    {v.type} — LKR {v.pricePerKm}/km
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {estimatedPrice && (
            <div className="tropical-gradient rounded-lg p-3 text-center">
              <p className="text-xs font-medium text-secondary-foreground">Estimated ({estimatedPrice.distance} km)</p>
              <p className="text-xl font-bold text-secondary-foreground">LKR {estimatedPrice.total.toLocaleString()}</p>
            </div>
          )}

          <Button onClick={handleBookRide} className="w-full ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
            <Send className="w-4 h-4" /> Book via WhatsApp
          </Button>
        </TabsContent>

        {/* BOOK A TRIP */}
        <TabsContent value="trip" className="space-y-3">
          <p className="text-sm text-muted-foreground">Tell us about your trip plan and we'll arrange everything for you.</p>
          <textarea
            className="w-full h-32 rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="E.g., 5-day trip covering Colombo, Kandy, Ella, Yala..."
            value={tripPlan}
            onChange={(e) => setTripPlan(e.target.value)}
          />
          <Button onClick={handleTripPlan} className="w-full ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
            <Send className="w-4 h-4" /> Send via WhatsApp
          </Button>
        </TabsContent>

        {/* CUSTOMER REQUEST */}
        <TabsContent value="request" className="space-y-3">
          <p className="text-sm text-muted-foreground">Custom tour, hotel transfer, long tour or special request.</p>
          <textarea
            className="w-full h-32 rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Describe your special request..."
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
          />
          <Button onClick={handleCustomRequest} className="w-full ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
            <Send className="w-4 h-4" /> Send via WhatsApp
          </Button>
        </TabsContent>

        {/* BOOK NOW (Uber Style) */}
        <TabsContent value="booknow" className="space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Pickup Location
            </label>
            <Select value={uberPickup} onValueChange={setUberPickup}>
              <SelectTrigger><SelectValue placeholder="Where from?" /></SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Navigation className="w-3 h-3" /> Drop Location
            </label>
            <Select value={uberDrop} onValueChange={setUberDrop}>
              <SelectTrigger><SelectValue placeholder="Where to?" /></SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc.name} value={loc.name}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
              <Car className="w-3 h-3" /> Vehicle
            </label>
            <Select value={uberVehicle} onValueChange={setUberVehicle}>
              <SelectTrigger><SelectValue placeholder="Choose vehicle" /></SelectTrigger>
              <SelectContent>
                {vehicles.map((v) => (
                  <SelectItem key={v.type} value={v.type}>
                    {v.type} — LKR {v.pricePerKm}/km
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {uberPrice && (
            <div className="tropical-gradient rounded-lg p-3 text-center">
              <p className="text-xs font-medium text-secondary-foreground">Estimated ({uberPrice.distance} km)</p>
              <p className="text-xl font-bold text-secondary-foreground">LKR {uberPrice.total.toLocaleString()}</p>
            </div>
          )}

          <Button onClick={handleUberBook} className="w-full ocean-gradient text-primary-foreground gap-2 shadow-md hover:opacity-90">
            <Send className="w-4 h-4" /> Book Now via WhatsApp
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingCard;
