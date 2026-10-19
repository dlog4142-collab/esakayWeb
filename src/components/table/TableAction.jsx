import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TablePagination } from "@/components/table/TablePagination";

const allProducts = [
  { id: 1, product: "Wireless Mouse", price: "$29.99" },
  { id: 2, product: "Mechanical Keyboard", price: "$129.99" },
  { id: 3, product: "USB-C Hub", price: "$49.99" },
  { id: 4, product: 'HD Monitor 27"', price: "$249.99" },
  { id: 5, product: "Ergonomic Office Chair", price: "$189.99" },
  { id: 6, product: "Desk Lamp LED", price: "$34.99" },
  { id: 7, product: "Laptop Stand", price: "$39.99" },
  { id: 8, product: "Bluetooth Speaker", price: "$59.99" },
  { id: 9, product: "External SSD 1TB", price: "$99.99" },
  { id: 10, product: "Webcam 1080p", price: "$69.99" },
  { id: 11, product: "Noise-Canceling Headphones", price: "$199.99" },
  { id: 12, product: "Mouse Pad Extended", price: "$19.99" },
  { id: 13, product: "Type-C Cable 2m", price: "$14.99" },
  { id: 14, product: "Portable Power Bank", price: "$45.99" },
  { id: 15, product: "Smart Desk Pad", price: "$55.99" },
];

export function TableActions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState("25");

  const limit = parseInt(rowsPerPage, 15);
  const totalPages = Math.ceil(allProducts.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const currentData = allProducts.slice(startIndex, startIndex + limit);

  return (
    <div className="space-y-4 ">
      {/* Removed overflow restrictions so content flows naturally with the page */}
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.product}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(val) => {
          setRowsPerPage(val);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
