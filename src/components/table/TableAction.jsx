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

export function TableActions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState("10");

  const allProducts = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+63 912 345 6789",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+63 917 234 5678",
      role: "User",
      status: "Active",
    },
    {
      name: "Michael Johnson",
      email: "michael.j@example.com",
      phone: "+63 918 456 7890",
      role: "Driver",
      status: "Inactive",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+63 919 567 8901",
      role: "Passenger",
      status: "Active",
    },
    {
      name: "David Wilson",
      email: "david.w@example.com",
      phone: "+63 920 678 9012",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Sarah Martinez",
      email: "sarah.m@example.com",
      phone: "+63 921 789 0123",
      role: "Driver",
      status: "Pending",
    },
    {
      name: "James Brown",
      email: "james.b@example.com",
      phone: "+63 922 890 1234",
      role: "Passenger",
      status: "Active",
    },
    {
      name: "Olivia Garcia",
      email: "olivia.g@example.com",
      phone: "+63 923 901 2345",
      role: "User",
      status: "Inactive",
    },
    {
      name: "Daniel Anderson",
      email: "daniel.a@example.com",
      phone: "+63 924 012 3456",
      role: "Driver",
      status: "Active",
    },
    {
      name: "Sophia Thomas",
      email: "sophia.t@example.com",
      phone: "+63 925 123 4567",
      role: "Passenger",
      status: "Pending",
    },
  ];

  const allColumns = ["Name", "Email", "Phone", "Role", "Status"];
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
              {allColumns.map((item, index) => (
                <TableHead key={index}>{item}</TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.status}</TableCell>
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

      <div className="flex justify-end">
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
    </div>
  );
}
