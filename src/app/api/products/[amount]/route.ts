import { createProducts } from "@/app/features/products/createProducts";
import { NextResponse } from "next/server";

export function GET(request: Request, context: any) {
    const {amount} = context.params
    const products = createProducts(amount);
    return NextResponse.json(
        {data: Array.from(products.values())},
        {status: 200}
    )
}