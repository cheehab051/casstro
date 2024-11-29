import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Prices() {
  const prices = [
    { service: "Dental Implants", price: "$200 - $350" },
    { service: "Teeth Whitening", price: "$50 - $150" },
    { service: "Hollywood Smile", price: "$2900 - $4500" },
    { service: "Full Dental Implants Makeover", price: "$3900 - $5500" },
  ]

  return (
    <section id="prices" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Prices</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Price Range</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prices.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

