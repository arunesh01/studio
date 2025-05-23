
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

const clients = [
  { id: "C001", name: "Acme Corp", contact: "Alice Johnson", email: "alice@acme.com", status: "Active", projects: 3, avatarLetter: "A" },
  { id: "C002", name: "Beta LLC", contact: "Bob Williams", email: "bob@betallc.com", status: "Active", projects: 1, avatarLetter: "B" },
  { id: "C003", name: "Gamma Inc", contact: "Charlie Brown", email: "charlie@gammainc.com", status: "Inactive", projects: 5, avatarLetter: "G" },
  { id: "C004", name: "Delta Solutions", contact: "Diana Prince", email: "diana@deltasol.com", status: "Active", projects: 2, avatarLetter: "D" },
  { id: "C005", name: "Epsilon Group", contact: "Edward Nygma", email: "edward@epsilongrp.com", status: "On Hold", projects: 0, avatarLetter: "E" },
];

export default function ClientsPage() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Clients</h1>
            <p className="text-muted-foreground">Manage your client information and relationships.</p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>A comprehensive list of all your clients.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Projects</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage asChild>
                               <Image 
                                    src="https://placehold.co/40x40.png" 
                                    alt={`${client.name} logo placeholder`}
                                    width={32}
                                    height={32}
                                    data-ai-hint="brand logo" />
                            </AvatarImage>
                            <AvatarFallback>{client.avatarLetter}</AvatarFallback>
                        </Avatar>
                        {client.name}
                    </div>
                  </TableCell>
                  <TableCell>{client.contact}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>
                    <Badge variant={client.status === "Active" ? "default" : (client.status === "Inactive" ? "destructive" : "secondary")}>
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{client.projects}</TableCell>
                  <TableCell className="text-center space-x-1">
                    <Button variant="ghost" size="icon" aria-label="Edit client">
                        <Edit className="h-4 w-4" />
                    </Button>
                     <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" aria-label="Delete client">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
