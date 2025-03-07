import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Shop = () => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
    {[1, 2, 3].map((item) => (
      <Card key={item} className="p-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Service {item}</h2>
          <p className="mb-2">High-quality web development services.</p>
          <Button className="bg-green-500 text-white p-2 rounded">Buy Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Shop;
